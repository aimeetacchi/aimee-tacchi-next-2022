import Image from 'next/image'
import 'photoswipe/dist/photoswipe.css'
import { Box } from '@mui/material';
import { Gallery, Item } from 'react-photoswipe-gallery'

const MyGallery = () => (
    <Gallery>
    <div style={{
        margin: '50px 0',
        paddingBottom: '100px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: 40,
        justifyContent: 'center',
    }}
    >
      <Item
        cropped
        original="/images/travel/travel001.jpg"
        thumbnail="/images/travel/travel001.jpg"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
        <Box ref={ref}>
            <Image style={{ cursor: 'pointer', display: 'block', borderRadius: '20px'}} alt="travel" width={500} height={500}  onClick={open} src="/images/travel/travel001.jpg" />
        </Box>
        )}
      </Item>
      <Item
        cropped
        original="/images/travel/travel002.jpg"
        thumbnail="/images/travel/travel002.jpg"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
            <Box ref={ref}>
                <Image style={{ cursor: 'pointer', display: 'block', borderRadius: '20px'}} alt="travel" width={500} height={500} onClick={open} src="/images/travel/travel002.jpg" />
            </Box>
        )}
      </Item>
      <Item
        cropped
        original="/images/travel/travel003.jpg"
        thumbnail="/images/travel/travel003.jpg"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
            <Box ref={ref}>
                <Image style={{ cursor: 'pointer', display: 'block', borderRadius: '20px'}} alt="travel" width={500} height={500} onClick={open} src="/images/travel/travel003.jpg" />
            </Box>
        )}
      </Item>

      <Item
        cropped
        original="/images/travel/travel004.jpg"
        thumbnail="/images/travel/travel004.jpg"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
            <Box ref={ref}>
                <Image style={{ cursor: 'pointer', display: 'block', borderRadius: '20px'}} alt="travel" width={500} height={500} onClick={open} src="/images/travel/travel004.jpg" />
            </Box>
        )}
      </Item>
      <Item
        cropped
        original="/images/travel/travel005.jpg"
        thumbnail="/images/travel/travel005.jpg"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
            <Box ref={ref}>
                <Image style={{ cursor: 'pointer', display: 'block', borderRadius: '20px'}} alt="travel" width={500} height={500} onClick={open} src="/images/travel/travel005.jpg" />
            </Box>
        )}
      </Item>
    </div>
    </Gallery>
  )

export default MyGallery