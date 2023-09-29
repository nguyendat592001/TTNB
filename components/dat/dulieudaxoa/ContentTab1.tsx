import { Col, Collapse, Image, Row } from 'antd'
import React from 'react'
import styles from './ContentTab.module.scss'
interface DataProps {
    key: string;
    day: number;
    month: number;
    year: number;
    time: string;
    name: string;
    description: string;
    department: string;
}

const ContentCollapse = (props: { data: DataProps[] }) => {
    return (
        <Row className="mt-20" gutter={[16, 16]}>
            {props.data.map((data, index) => (
                <Col xs={24} md={8} sm={12} key={index}>
                    <div className={`${styles.itemDelete} cursor-pointer`}>
                        <div
                            className='flex flex-align-center'
                            style={{
                                gap: '20px',
                            }}
                        >
                            <Image
                                src="/img/dulieudaxoa/imgdaxoa.png"
                                alt="avatar"
                                preview={false}
                            />
                            <div>
                                <p>{`${data.day}.${data.month}.${data.year}`}</p>
                                <p>{data.time}</p>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    );
};
const dataForContentCollapse: DataProps[] = [
    {
        key: '1',
        day: 1,
        month: 9,
        year: 2023,
        time: '10:00 AM',
        name: 'Dat Nguyen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        department: 'HR',
    },
    {
        key: '4',
        day: 1,
        month: 9,
        year: 2023,
        time: '10:00 AM',
        name: 'Dat',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        department: 'HR',
    },
    {
        key: '2',
        day: 2,
        month: 9,
        year: 2023,
        time: '11:30 AM',
        name: 'thuc nguyen',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        department: 'Finance',
    },
    {
        key: '3',
        day: 3,
        month: 9,
        year: 2023,
        time: '12:00 AM',
        name: 'viet nguyen',
        description: 'Nullam quis risus eget urna mollis ornare vel eu leo.',
        department: 'IT',
    },
];


export default function ContentTab1() {

    const groupedData = new Map<string, DataProps[]>();
    dataForContentCollapse.forEach((data) => {
        const key = `${data.day}/${data.month}/${data.year}`;
        if (!groupedData.has(key)) {
            groupedData.set(key, []);
        }
        groupedData.get(key)?.push(data);
    });

    const panels = Array.from(groupedData.keys()).map((key) => {
        const dayData = groupedData.get(key) || [];
        return {
            key,
            label: key,
            children: <ContentCollapse data={dayData} />,
        };
    });

    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <div>
            <Collapse accordion defaultActiveKey={['1']} onChange={onChange}>
                {panels.map((panel) => (
                    <Collapse.Panel key={panel.key} header={panel.label}>
                        {panel.children}
                    </Collapse.Panel>
                ))}
            </Collapse>
        </div>
    );
}