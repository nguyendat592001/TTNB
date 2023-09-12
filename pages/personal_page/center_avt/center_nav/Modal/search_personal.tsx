import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Image from 'next/image'

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <><p style={{display:"flex", alignItems:"center",padding:"5px 10px"}}  onClick={showModal}>
      <Image
      style={{marginRight:10}}
        width={21}
        height={20}
        alt="dot"
        src={"/img/tabs_block/serch.svg"}
      />
      Tìm kiếm trên trang cá nhân
      </p>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </>
  );
};

export default App;