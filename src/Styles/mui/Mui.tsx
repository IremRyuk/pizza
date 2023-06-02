export const IconSize = {
    fontSize: 'xx-large'
}
export const IconSizeMini = {
    fontSize: 'xx-large',
    scale: '1'
}
export const IconSizeMiniBtn = {
    fontSize: 'xx-large',
    scale: '1.5'
}
export const SmallSizeBtn = {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
}
export const InputMui = {
    width: {
        sm: '70vw',
        md: '50vw'
    },
    fontSize: {
        sm: 'large',
        md: 'xx-large'
    },
    transition: '0.2s',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: '2px solid #8f8f8f',
            borderRadius: '2.4mm'
        },
        '&:hover fieldset': {
            borderColor: '#696969'
        },
        '&.Mui-focused fieldset': {
            borderColor: '#696969'
        }
    }
}
// Food Names Fonts
export const FoodFonts = {
    color: 'orange',
    fontSize: {
        xs: 'large',
        sm: 'xx-large'
    },
    fontFamily: `'Dancing Script', cursive`
}
// Bottom Navigation
export const NavigationBottom = {
    cursor: 'pointer',
    transition: '0.2s',
    '&:hover': {
        scale: '1.2'
    }
}
// Contacts Page
export const ContactBtns = {
    width:{xs:'40%',md:'auto'},
    scale:'1',
    bgcolor: '#A0A0A0',
    transition: '0.17s',
    color: 'black',
    fontWeight: 'bold',
    margin: '20px',
    '&:hover': {
        bgcolor: '#A0A0A0',
        scale: {xs:"1.2",md:'1.3'}
    }
}
export const ContactBox = {
    width:{xs:'100%',md:'60%'}, 
    height:'90%',
    borderRadius:'2.4mm',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    bgcolor:'#454545',
}