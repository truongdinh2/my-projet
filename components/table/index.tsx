import { SearchOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Space, Table, Tag, Tooltip, Row, Col, notification } from "antd";
import { ColumnsType } from 'antd/es/table';
import Checkbox from "antd/lib/checkbox/Checkbox";
import { useRouter } from 'next/router';
import { ReactElement, useState } from "react";
import Highlighter from 'react-highlight-words';
import { dataDetail } from './data';
import ModalContact from './modal';
import styles from './table.module.css';
interface CheckSaved {
    id: Number,
    status: Boolean,
}
const TableData = () => {
    const [content, setContent] = useState<string | ReactElement>('');
    const [hasCheckSave, setHasCheckSave] = useState<CheckSaved[]>([]);
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isContact, setIsContact] = useState(false);
    const [dataItem, setDataItem] = useState([]);
    const router = useRouter();
    const [isFeeDone, setIsFeeDone] = useState(false)

    const onShowInformation = (_, record) => {
        const { id } = record;
        setIsModalVisible(true)
        const data = dataDetail.filter((item) => item.id === id ? item : '')
        setDataItem(data)
    }
    const onCheckSave = (record) => {
        const { id } = record;
        const obj = hasCheckSave.filter((item) => item.id === id ? item : '')
        const arr = hasCheckSave.filter((item) => item.id !== id ? item : '')
        setHasCheckSave([
            ...arr,
            { id, status: !obj[0]?.status }
        ])
    }
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    // ref={node => {
                    //     const searchInput = node;
                    // }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        // +-: visible => {
        //     if (visible) {
        //         setTimeout(() => this.searchInput.select(), 100);
        //     }
        // },
        render: text =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setIsContact(false);
        setIsFeeDone(false)

    };
    const columns: ColumnsType<DataTable> = [
        {
            title: () =>
                <Tooltip placement="rightTop" title="Tổng hợp những lớp bạn muốn dạy">
                    <div>Ô nhớ</div>
                </Tooltip>,
            align: 'center',
            dataIndex: 'status',
            key: 'status',
            render: (_, record) => {
                return (
                    <Checkbox onChange={() => onCheckSave(record)}></Checkbox>
                )
            },
            fixed: "left",
            filters: [
                {
                    text: 'Những cái đã chọn',
                    value: true,
                }
            ],
            onFilter: (value, record) => {
                const { id } = record;
                const filterDataId = hasCheckSave.filter(data => data.status === value ? data.id : '');
                let recordRender;
                filterDataId.forEach(dataId => dataId.id === id ? recordRender = true : '');
                return recordRender;
            },

        },
        {
            title: 'Họ và Tên',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            render: (text, record) =>
                <a onClick={() => onShowInformation(text, record)}>{text}</a>,
            width: '10%',
        },
        {
            title: 'Lớp',
            dataIndex: 'age',
            align: 'center',
            width: '5%',
            key: 'age',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            align: 'center',
            width: '10%',
            key: 'address',
            ...getColumnSearchProps('address'),
        },
        {
            title: 'Môn',
            key: 'subjects',
            align: 'center',
            width: '8%',
            dataIndex: 'subjects',
            ...getColumnSearchProps('subjects')

        },
        {
            title: 'Thời gian',
            align: 'center',
            dataIndex: 'time',
            key: 'time',
            width: '18%',
            ...getColumnSearchProps('time'),
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        return (
                            <Tag style={{ marginTop: '2px' }} color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Lương',
            align: 'center',
            dataIndex: 'salary',
            width: '7%',
            key: 'salary',
        },
        {
            title: 'Ngoài ra',
            align: 'center',
            dataIndex: 'more',
            width: '25%',
            key: 'more',
        },
        {
            title: '(*) Yêu cầu',
            align: 'center',
            dataIndex: 'requierd',
            key: 'requierd',
            width: '10%',
            fixed: 'right'
        },
    ];
    const data = [
        {
            status: false,
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            subjects: 'toán',
            time: ['7h-9h', 'th2,th3,th5'],
            salary: '130k/1b',
            more: 'Cần gia sư có kỹ năng giảng dạy, em đang từ điểm 6 muốn lên 7,8',
            requierd: 'gia sư Nữ',
            id: 1
        },
        {
            status: false,
            key: '2',
            name: 'truong dinh nguyen',
            age: 32,
            address: 'New York No. 1 Lake Park',
            subjects: 'toán',
            time: ['7h-9h', 'th2,th3,th5'],
            salary: '',
            more: '',
            requierd: '',
            id: 2,
        },
        {
            status: false,
            key: '3',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            subjects: 'toán',
            time: ['7h-9h', 'th2,th3,th5'],
            salary: '',
            more: '',
            requierd: '',
            id: 3,
        },
    ];
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    };

    const handleReset = clearFilters => {
        clearFilters();
        setSearchText('')

    };
    const onContact = () => {
        setIsContact(true)
    }
    const footerModal = () => {
        return (
            <Row justify="space-between">
                <Col>
                    * Bạn đã chắc chắn muốn liên hệ ?
                </Col>
                <Col>
                    <Row>
                        <Button onClick={onContact}>Có</Button>
                        <Button type="primary" onClick={handleCancel}>Không</Button>
                    </Row>
                </Col>
            </Row>
        )
    }
    const openNotificationWithIcon = type => {
        notification[type]({
            message: 'Thông báo',
            description:
                'Chúc mừng bạn đã thành công, xin cảm ơn!',
        });
    };
    const openNotification = () => {
        notification.open({
            message: 'Thông báo',
            description:
                'Hãy chọn lại lớp khác nào! Đừng lo lắng. Cảm ơn bạn.',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };
    const onFail = () => {
        handleCancel()
        openNotification()
    }
    const onSuccess = () => {
        handleCancel()
        openNotificationWithIcon('success')
        router.push('/nguoi-day/ho-tro')
    }
    const FeeDone = () => {
        setIsFeeDone(true)
    }
    console.log(isFeeDone);
    return (
        <>
            <Modal title="Liên hệ" visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                maskClosable={false}
                footer={isFeeDone && footerModal()}
            >
                <ModalContact isFee={isFeeDone}
                    onSuccess={onSuccess}
                    onFail={onFail}
                    dataItem={dataItem}
                    FeeDone={FeeDone}
                    isContact={isContact} />
            </Modal>
            <h3 style={{ marginBottom: '1%' }}>Danh sách các lớp học</h3>
            <Row justify="end"
                className={styles.note}
            >
                <Col span={8}>
                    <span style={{ color: 'red', fontSize: '13px' }}>* Chú thích</span>
                    <span style={{ fontStyle: "italic", fontSize: '12px' }}
                    > Họ và Tên: là cột để bạn chọn lớp.</span>
                    <br />
                    <span style={{ fontStyle: "italic", fontSize: '12px', marginLeft: '65px' }}>
                        Nếu có thắc mắc liên hệ ngay với chúng tôi.
                    </span>
                </Col>
            </Row>
            <Table
                bordered
                className={styles.table}
                columns={columns}
                dataSource={data}
                scroll={{ x: 1100 }}
                pagination={false}
            />
        </>
    )
}
export default TableData;