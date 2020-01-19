import React from 'react';

const fecha = new Date();
const ano = fecha.getFullYear();

const Footer = () => (
        <div>
            <footer>
                <p>Todos Los Derechos Reservados &copy; {ano}</p>
            </footer>
        </div>
); 

export default Footer;