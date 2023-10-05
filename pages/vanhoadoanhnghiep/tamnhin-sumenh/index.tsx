import React from 'react'
import Vanhoadoanhnghiep from '..';
export default function Index() {
    const childrenContentLeft = <div>Đây là nội dung bên trái của tamnhinsumenh</div>;
    const childrenContentRight = <div>Đây là nội dung bên phải của tamnhinsumenh</div>;
    return (
        <Vanhoadoanhnghiep
            childrenContentLeft={childrenContentLeft}
            childrenContentRight={childrenContentRight}
        />
    )
}
