import { SearchOutlined } from "@ant-design/icons";
import { Input, Image } from "antd";
import { useState } from "react";

import { activitiesData } from "./emotionsData";
import styles from "./ModalEmotions.module.css";

interface ActivityItem {
    name: string;
    imageSrc: string;
}

function Activity() {

    const [searchText, setSearchText] = useState("");
    const [filteredActivities, setFilteredActivities] = useState<ActivityItem[]>(activitiesData);

    const handleSearch = (value: string) => {
        setSearchText(value);

        const filtered = activitiesData.filter((activity) =>
            activity.name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredActivities(filtered);
    };
    return (
        <>
            <div className={styles.container}>
                <div className={`${styles.searchActivity} searchActivity`}>
                    <Input
                        placeholder='Nhập tên bạn bè'
                        className={styles.modal__input}
                        bordered={false}
                        suffix={
                            <SearchOutlined rev={undefined} />
                        }
                        onChange={(e) => handleSearch(e.target.value)}
                        value={searchText}
                    />
                </div>
                <div className={styles.listEmotions}>
                    {filteredActivities.map((activity, index) => (
                        <div key={index} className={styles.emotion__item}>
                            <Image
                                src={activity.imageSrc}
                                alt={activity.name}
                                preview={false}
                                className={styles.emotion__item__img}
                            />
                            <p className={styles.emotion__item__name}>{activity.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Activity;