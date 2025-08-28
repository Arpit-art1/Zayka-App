import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    const handleCategoryClick = (menuName) => {
        if (category === menuName) {
            setCategory("All"); // reset if clicked again
        } else {
            setCategory(menuName);
        }
    };

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>
                Discover our delicious selection of dishes and find your new favorite meal!
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleCategoryClick(item.menu_name)}
                            className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
                        >
                            <img src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
}

export default ExploreMenu;
