import React from 'react'
import "../style/header.css"

export default function Header() {
  return (
    <header>
        <div className="container">
      <div className="header_logo display_block_logo"><a href="#"></a></div>
      <div className="header_menu">
        <ul className='header_menu_item'>
            <li className='header_menu_link'>Услуги</li>
            <li className='header_menu_link'>Виджеты</li>
            <li className='header_menu_link'>Интеграции</li>
            <li className='header_menu_link'>Кейсы</li>
            <li className='header_menu_link display_block'>Сертификаты</li>
        </ul>
      </div>
      <div className="header_connection">
        <div className="header_connection_number">+7 555 555-55-55</div>
         <div className="header_connection_icon">
            <span className='header_connection_telegram'></span>
            <span className='header_connection_viber'></span>
            <span className='header_connection_whatsapp'></span>
         </div>
      </div>
      </div>
    </header>
  )
}
