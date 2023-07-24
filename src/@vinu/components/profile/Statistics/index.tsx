import AreaChart from "../../charts/AreaChart";


const Statistics = () => {
    return (
        <AreaChart
            title={'chart test'}
            label={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
            data1={[31,42,35,34,41,27,37]}
            data2={[30,50,45,34,21,39,51]}
        />
    );
};

export default Statistics;



