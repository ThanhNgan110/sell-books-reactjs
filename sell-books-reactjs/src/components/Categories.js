import React from 'react';
import {Link} from 'react-router-dom';

const Categories = () => {
  return (
  <>
  <section className='section-categories'>
    <div className='container'>
       <div className='section-top'>
        <h2>DANH MỤC</h2>
        <Link to=''>Tất cả danh mục
        <i class="bi bi-chevron-right"></i>
        </Link>
       </div>
       <ul className='list-unstyled '>
        <li>
            <Link to=''>
                <div>
                    
                </div>
            </Link>
        </li>
       </ul>


    </div>

  </section>
  </>
  )
}

export default Categories