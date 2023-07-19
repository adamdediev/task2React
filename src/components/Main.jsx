import React from 'react'
import '../style/main.css'

export default function Main() {
  return (
    <main>
        <div className='container flex '>
            <aside>
              <div className="aside_title"><h1>Зарабатывайте больше <span>с WELBEX</span> </h1></div>
              <div className="aside_subtitle">Развиваем и контролируем продажи за вас</div>
            </aside>

            <nav>
              <div className="nav_title">Вместе с <span>бесплатной консультацией</span> мы дарим:</div>
              <div className="nav_subtitle_block">
                <div className="nav_subtitle_block_1">
                <div className='vidget sub_title_bootom'>Виджеты <br /></div><span>30 готовых решений</span>
                <div className='skype sub_title_bootom' >Skype Аудит <br /></div> <span>отдела продаж и CRM системы</span>
                </div>
                <div className="nav_subtitle_block_1">
                <div className='dashboard sub_title_bootom'>Dashboard <br /> </div><span>с показателями вашего бизнеса</span>
             <div className='day sub_title_bootom'>35 дней <br /> </div> <span>использования CRM</span>
             </div>
              </div>
              <div className="nav_subtitle_block_2 display_none_block">
             <div className="nav_subtitle_block_2_1">
             <span>Skype аудит</span>
             <span>Dashboard</span>
             </div>
             <div className="block_2">
             <span>30 виджетов</span>
              <span>Месяц аmoCRM</span>
             </div>
              
             
              </div>
              <button className='btn'>Получить консультацию</button>
            </nav>
            
      </div>
      </main>
    
  )
}
