import React from 'react';
import FormTeacher from '../../components/form/nguoiday';
import Layout from '../../components/layout/index';
import { ClassNameCtx } from '../../components/useContext';
export default function SignUp() {
    return (
        <ClassNameCtx.Provider value='hi'>
            <Layout>
                <div style={{marginTop:'7%'}}>
                <FormTeacher />
                </div>
            </Layout>
        </ClassNameCtx.Provider>
    )
}
