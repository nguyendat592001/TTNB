import React, { useState } from 'react';

import { Button, Menu } from 'antd';
import NewSidebar from '@/components/newHeader/newSidebar/newSidebar';

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed); // Thay đổi trạng thái collapsed
    };
    return (
        <div>
            <NewSidebar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        </div>
    );
};

export default App;