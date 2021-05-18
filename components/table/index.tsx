import { Button, Popover, Table, Tag } from "antd";
import { ReactElement, useState } from "react";
import { dataDetail } from './data'
import { ColumnsType } from 'antd/es/table'

interface Record {
    id: number
}
const TableData = () => {
    const [content, setContent] = useState<string | ReactElement>('');
    // const dataItem = dataDetail.filter
    const onShowInformation = (_, record) => {
        // console.log(id)
        const { id } = record;
        setContent(
            () => {
                const dataItem = dataDetail.filter((item) => item.id === id ? item : '')
                return (
                    <div>
                        <p>Số điện thoại: {dataItem[0].sdt}</p>
                        <p>Địa chỉ: {dataItem[0].diachi}</p>
                        <img
                            src={`${dataItem[0].img}`}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                    </div>
                )
            }
        )
    }
    const columns: ColumnsType<object> = [
        {
            title: 'Họ và Tên',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            render: (text, record) =>
                <Popover placement="right" content={content} title="Title" trigger="click">
                    <a onClick={() => onShowInformation(text, record)}>{text}</a>
                </Popover>,
        },
        {
            title: 'Lớp',
            dataIndex: 'age',
            align: 'center',
            key: 'age',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            align: 'center',
            key: 'address',
        },
        {
            title: 'Môn',
            key: 'subjects',
            align: 'center',
            dataIndex: 'subjects',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Thời gian',
            align: 'center',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Lương',
            align: 'center',
            dataIndex: 'salary',
            key: 'salary',
        },
        {
            title: 'Ngoài ra',
            align: 'center',
            dataIndex: 'more',
            key: 'more',
        },
        {
            title: 'Trạng thái',
            align: 'center',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: '(*) Yêu cầu',
            align: 'center',
            dataIndex: 'requierd',
            key: 'requierd',
            fixed: 'right'
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            subjects: ['toán'],
            time: '',
            salary: '130k/1b',
            status: '10 ngày trước',
            more: 'Cần gia sư có kỹ năng giảng dạy, em đang từ điểm 6 muốn lên 7,8',
            requierd: 'gia sư Nữ',
            id: 1
        },
        {
            key: '2',
            name: 'truong dinh nguyen',
            age: 32,
            address: 'New York No. 1 Lake Park',
            subjects: ['nice', 'developer'],
            time: '',
            salary: '',
            status: '',
            more: '',
            requierd: '',
            id: 2,
        },
        {
            key: '3',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            subjects: ['nice', 'developer'],
            time: '',
            salary: '',
            status: '',
            more: '',
            requierd: '',
            id: 3,
        },
    ];
    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}
export default TableData;