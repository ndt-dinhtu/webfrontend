import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import anh1 from "../assets/about/anh1.png"
import anh2 from "../assets/about/anh2.png"
import anh3 from "../assets/about/anh3.png"
import anh4 from "../assets/about/anh4.png"
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Container } from 'reactstrap';
import anh5 from "../assets/about/anh5.png"

const useStyles = makeStyles((theme) => ({
    about: {
        marginTop: "100px",
        padding: "100px",
        textAlign: 'center'
    },
    root: {
        maxWidth: 345,
        margin: 'auto',
        marginTop: "50px"
    },
    media: {
        height: 0,
        paddingTop: '90.25%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    favoriteIcon: {
        color: red[500],
    },
    animation: {
        animation: `$blink 1s infinite, $moveUpDown 1s infinite`,
    },
    "@keyframes blink": {
        "0%, 100%": {
            opacity: 1,
        },
        "50%": {
            opacity: 0,
        },
    },
    "@keyframes moveUpDown": {
        "0%, 100%": {
            transform: 'translateY(0)',
        },
        "50%": {
            transform: 'translateY(-5px)',
        },
    },
    gridContainer: {
        padding: '20px',
    },
    contentAbout: {
        display: 'flex'
    },
    textContent: {
        padding: '20px',
        width: '100%',
        fontSize: '20px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
    },
    imgAbout: {
        width: '50%'
    }
}));

const cardContents = [
    ["Heat oil in a large skillet.", "Add shrimp and chorizo.", "Cook until shrimp is pink.", "Serve with rice."],
    ["Preheat oven to 375°F.", "Mix ingredients in a bowl.", "Pour mixture into baking dish.", "Bake for 25 minutes."],
    ["Boil water in a pot.", "Add pasta and cook until al dente.", "Drain pasta and add sauce.", "Garnish with cheese."],
    ["Heat a grill to medium-high.", "Season steak with salt and pepper.", "Grill steak for 6 minutes per side.", "Let rest before slicing."]
];

const avatars = ["M", "N", "T", "G"];
const mediaImages = [
    anh1, anh2, anh3, anh4
];
const descriptions = ["Nguyễn Văn Mèo", "Lê Trần Nai", "Cao Thị Mỹ Thỏ", "Trần Văn Gà"];

export default function AboutUs() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [likedStates, setLikedStates] = useState([false, false, false, false]);

    useEffect(() => {
        const storedLikedStates = localStorage.getItem('likedStates');
        if (storedLikedStates) {
            setLikedStates(JSON.parse(storedLikedStates));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('likedStates', JSON.stringify(likedStates));
    }, [likedStates]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleFavoriteClick = (index) => {
        const newLikedStates = [...likedStates];
        newLikedStates[index] = !newLikedStates[index];
        setLikedStates(newLikedStates);
    };

    const renderCard = (title, content, index) => (
        <Card className={classes.root} key={index}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {avatars[index]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={mediaImages[index]}
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {descriptions[index]}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => handleFavoriteClick(index)}
                    className={!likedStates[index] ? classes.animation : undefined}
                >
                    <FavoriteIcon color={likedStates[index] ? 'error' : 'action'} />
                </IconButton>
                <IconButton aria-label="share">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <ShareIcon />
                    </a>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {content.map((paragraph, idx) => (
                        <Typography paragraph key={idx}>
                            {paragraph}
                        </Typography>
                    ))}
                </CardContent>
            </Collapse>
        </Card>
    );

    return (
        <div>
            <Header />

            <Container>
                <div >
                    <h1 className={classes.about}>ABOUT US</h1>
                    <div className={classes.contentAbout}>
                        <img src={anh5} alt='anh5' className={classes.imgAbout} />
                        <div>
                            <div className={classes.textContent} >
                                <p>Chúng tôi cam kết mang đến cho Quý Khách những sản phẩm và dịch vụ tốt nhất với chất lượng vượt trội. Chúng tôi luôn nỗ lực để đáp ứng và vượt qua mong đợi của Quý Khách bằng cách:</p>
                                <p><b>Cung cấp sản phẩm/dịch vụ chất lượng cao:</b> Chúng tôi chỉ sử dụng nguyên liệu và công nghệ tốt nhất để đảm bảo sản phẩm/dịch vụ của chúng tôi đạt tiêu chuẩn chất lượng cao nhất.</p>
                                <p><b> Dịch vụ khách hàng tận tâm:</b> Đội ngũ nhân viên của chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của Quý Khách một cách nhanh chóng và hiệu quả.</p>
                                <p><b>Cam kết bảo hành và hỗ trợ sau bán hàng: </b>Chúng tôi luôn sẵn sàng hỗ trợ và giải quyết bất kỳ vấn đề nào liên quan đến sản phẩm/dịch vụ sau khi Quý Khách nhận hàng.</p>
                                <p>Một lần nữa, chúng tôi xin gửi lời cảm ơn chân thành đến Quý Khách. Sự hài lòng của Quý Khách là thành công lớn nhất của chúng tôi. Nếu có bất kỳ yêu cầu hay câu hỏi nào, xin đừng ngần ngại liên hệ với chúng tôi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className={classes.about}>OUR TEAMS</h1>
                <Grid container spacing={4} className={classes.gridContainer}>
                    {["Shrimp Chorizo", "Another Recipe", "One More Recipe", "Final Recipe"].map((title, index) => (
                        <Grid item xs={12} md={6} lg={3} key={index}>
                            {renderCard(title, cardContents[index], index)}
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}
