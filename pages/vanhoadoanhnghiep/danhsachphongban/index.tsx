import React from 'react'
import Vanhoadoanhnghiep from '..';
export default function Index() {
    const childrenContentLeft = <div>Đây là nội dung bên trái của danhsachphongban</div>;
    const childrenContentRight = <div>Đây là nội dung bên phải của danhsachphongban</div>;
    return (
        <Vanhoadoanhnghiep
            childrenContentLeft={childrenContentLeft}
            childrenContentRight={childrenContentRight}
        />
    )
}