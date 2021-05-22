import React from 'react';
import FormLearner from '../../components/form/nguoihoc';
import Layout from '../../components/layout/index';
import { ClassNameCtx } from '../../components/useContext';
export default function SignUp() {
    return (
        <ClassNameCtx.Provider value='hi'>
            <Layout>
                <div style={{marginTop:'7%'}}>
                <FormLearner />
                </div>
            </Layout>
        </ClassNameCtx.Provider>
    )
}
