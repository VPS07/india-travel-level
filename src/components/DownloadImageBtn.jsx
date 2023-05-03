import React, { useCallback } from 'react';
import { toJpeg } from 'html-to-image';

function DownloadImageBtn({ MapRef }) {
    const fileName = 'indiaLevelMap.jpg'
    const downloadJpg = useCallback(() => {
        if (MapRef.current === null) {
            return
        }
        toJpeg(MapRef.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = `${fileName}`
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [MapRef]);
    return (
        <>
            <section className='save-image-button' onClick={downloadJpg}>Save Image</section>
        </>
    )
}

export default DownloadImageBtn