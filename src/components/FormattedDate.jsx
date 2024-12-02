import React from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';


const FormattedDate = ({ date }) => {
    const formattedDate = date ? format(new Date(date), 'MMM dd, yyyy') : 'Date non disponible';
    return <span>{formattedDate}</span>;
};

export default FormattedDate;