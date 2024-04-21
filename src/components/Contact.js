import React from 'react';
import '../styles/contact.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contact = () => (
    <div className='containerContact'>

        <Card className='card' sx={{ minWidth: 275 }}>
            <CardContent className='content'>

                <div className='email'>
                    <EmailOutlinedIcon />
                    <div>
                        <a href="mailto:avpurani@uwaterloo.ca">avpurani@uwaterloo.ca</a>
                    </div>
                </div>
                <div className='email'>
                    <PhoneAndroidOutlinedIcon />
                    <div>647-784-3452</div>
                </div>

                <div className='email'>
                    <LinkedInIcon />
                    <a className='linkedin' href="https://linkedin.com/in/amanpuranik" target="_blank">linkedin.com/in/amanpuranik</a>
                </div>


            </CardContent>

        </Card>

    </div>
)

export default Contact;