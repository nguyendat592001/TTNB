import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import { Modal, Image, Dropdown, Button, Select, Input, Space, Menu } from "antd";
import LeftNav from "../../../../components/thuc_components/left-nav-group/leftNav";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const Growth = () => {
   const dataChart = {
      labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
      datasets: [
         {
            label: "Tổng thành viên",
            data: [0, 6, 4, 12, 2, 8, 4],
            fill: false,
            borderColor: "#ffa800",
         },
      ],
   };
   const options = {
      scales: {
         xAxes: [
            {
               type: "category",
               labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
            },
         ],
         yAxes: [
            {
               ticks: {
                  beginAtZero: true,
               },
            },
         ],
      },
   };
   const dataChartMember = {
      labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
      datasets: [
         {
            label: "Yêu cầu làm thành viên",
            data: [0, 6, 4, 7, 4, 0, 4],
            fill: false,
            borderColor: "#ffa800",
         },
      ],
   };
   const optionMember = {
      scales: {
         xAxes: [
            {
               type: "category",
               labels: ["1/9", "2/9", "3/9", "4/9", "5/9", "6/9", "7/9"],
            },
         ],
         yAxes: [
            {
               ticks: {
                  beginAtZero: true,
               },
            },
         ],
      },
   };
   return (
      <>
         <div className={styles.container}>
            <div className={styles.left_container}>
               <div className={styles.left}>
                  <LeftNav />
               </div>
            </div>
            <div className={styles.right}>
               <div className={styles.header}>
                  <input type="date" className={styles.date} />
                  <input type="date" className={styles.date} />
               </div>

               <div className={styles.line}>
                  <h2>Tổng số thành viên</h2>
                  <Line data={dataChart} options={options} />
               </div>
               <div className={styles.line}>
                  <h2>Yêu cầu làm thành viên</h2>
                  <Line data={dataChartMember} options={optionMember} />
               </div>
            </div>
         </div>
      </>
   );
};
export default Growth;
