import React, { useEffect } from 'react';

const Pagination = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const FirstPage = () => {
        if (props.page !== 1) {
            return (
                <>
                    <li className="page-item">
                        <button className="page-link" onClick={onClickFirst}>Primera</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={onClickAnterior} >{props.page - 1}</button>
                    </li>
                </>
            )
        }
    }

    const LastPage = () => {
        if (props.page !== props.maxPages) {
            return (
                <>
                    <li className="page-item"><button className="page-link" onClick={onClickSiguiente} >{props.page + 1}</button></li>
                    <li className="page-item">
                        <button className="page-link" onClick={onClickLast}>Última</button>
                    </li>
                </>
            )
        }
    }

    const onClickAnterior = () => {
        props.changePage(props.page - 1);
    }

    const onClickSiguiente = () => {
        props.changePage(props.page + 1);
    }

    const onClickFirst = () => {
        props.changePage(1);
    }

    const onClickLast = () => {
        props.changePage(props.maxPages);
    }


    return (<>
        <nav aria-label="Page navigation example" className='bg-dark'>
            <ul className="pagination justify-content-center ">
                <FirstPage />
                <li className="page-item"><button className="page-link active" >{props.page}</button></li>
                <LastPage />
            </ul>
        </nav>
    </>);
}

export default Pagination;