import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps, NextPage } from 'next'

const NotFound: NextPage = () => {
    return (
        <div className='flex-center my-5'>
            <h1 className='text-xl'>404</h1>
        </div>
    )
}

export default NotFound

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ['common'])),
        },
    }
}
