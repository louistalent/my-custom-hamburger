import "../../assets/css/layout/header.css"
import logo from "../../assets/images/art/logo.png";
import Button from '@mui/material/Button';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Stack from '@mui/material/Stack';
const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark" role="navigation" id="banner">

                <div className='container'>
                    <a href="/home">
                        <img src={logo} className="img_logo" />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/home">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/rule">RULES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/faq">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/support">SUPPORT</a>
                            </li>
                        </ul>
                        <Stack direction="row"
                            spacing={3}>
                            <Button href="/login" variant="outlined"
                                style={{ padding: "10px", fontSize: "18px" }}
                                startIcon={<LockOutlinedIcon />}>
                                Login
                            </Button>
                            <Button href="/signup" variant="contained"
                                style={{ padding: "10px", fontSize: "18px" }}

                                endIcon={<LockOpenIcon />}>
                                SingUp
                            </Button>
                        </Stack>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
