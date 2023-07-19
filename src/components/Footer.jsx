import React from 'react'
import "../style/footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="container">
      <div className="footer_box">
        <div className="company">
          <ul>
            <span>О компании</span>
            <li><a href="#">Партнёрская программа</a></li>
            <li><a href="#">Вакансии</a></li>        
          </ul>
        </div>
        <div className="menu">
        
        <ul>
        <span>Меню</span>
          <li><a>Расчёт стоимости</a></li>
          <li><a>Услуги</a></li>
          <li><a>Виджеты</a></li>
          <li><a>Интеграции</a></li>
          <li><a>Наши клиенты</a></li>
        </ul>
        <ul className='menu_2'>
          <span></span>
          <li className='none'><a>Благодарность клиентов</a></li>
        <li><a>Кейсы</a></li>
          <li className='block'><a>Благодарственные письма</a></li>
          <li><a>Сертификаты</a></li>
          <li><a>Блог на Youtube</a></li>
          <li><a>Вопрос / Ответ</a></li>
        </ul>

        </div>
        <div className="contact">
      <ul>
        <span>Контакты</span>
        <li><a href="#">+7 555 555-55-55</a></li>
        <li><a className='icons' href="#"><span className='footer_telegram'></span><span className='footer_viber'></span><span className='footer_whatsapp'></span></a></li>
        <li className='adress'>Москва, Путевой проезд 3с1, к 902</li>
       
      </ul>

        </div>
      </div>
      </div>
      <div className="footer_footer">
        <span>©WELBEX 2022. Все права защищены</span>
        <span>Политика конфиденциальности</span>
      </div>
    </footer>
  )
}
