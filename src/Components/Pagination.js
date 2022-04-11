import React from 'react';

export const Pagination = (props) => {

    const {page, totalPages, previousPage, nextPage } = props;


    return (
        <>
            <button onClick={previousPage} ><i className="fa-solid fa-chevron-left"></i></button>
            <h4>{page} de {totalPages}</h4>
            <button onClick={nextPage}><i className="fa-solid fa-chevron-right"></i></button>
        </>
    );
}