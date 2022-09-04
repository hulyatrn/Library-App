import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

export default function Navbar() {

    const {logout}=useLogout(); 

    return(
        <nav>
            <h1>Kitaplık Uygulaması</h1>
            <ul>
                <li><Link to="/">Anasayfa</Link></li>
                <li><Link to="/login">Giriş</Link></li>
                <li><Link to="/signup">Üye Ol</Link></li>
                <li className='exit' onClick={logout}>Çıkış</li>
            </ul>
            <h5 className='delete'>Silmek istediğiniz kitaplarınızın üzerine dokununuz...</h5>
        </nav>
    )
}