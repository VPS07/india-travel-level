import React from 'react'
import { MENU_OPTIONS } from '../utils/constant'

function LevelMenu({ menuPosition, selectedStateName, handleLevelClick }) {
    const searchUrl =
        'http://www.google.com/search?q="' +
        selectedStateName +
        ', India"';
    return (
        <div
            className='level-menu'
            style={{
                position: 'absolute',
                top: menuPosition.y,
                left: menuPosition.x,
            }}>
            <div>
                <div className='menu-header' onClick={() => window.open(searchUrl)}>
                    {selectedStateName} ↗{' '}
                </div>
                {MENU_OPTIONS.map(({ label, level }) => (
                    <div
                        key={level}
                        level={level}
                        className={`level-${level}`}
                        onClick={handleLevelClick}>
                        {label}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LevelMenu