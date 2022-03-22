import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import VideoCall from "@material-ui/icons/VideoCall";
import Apps from "@material-ui/icons/Apps";
import MoreVert from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import Subscriptions from "@material-ui/icons/Subscriptions";
import Whatshot from "@material-ui/icons/Whatshot";
import VideoLibrary from "@material-ui/icons/VideoLibrary";
import History from "@material-ui/icons/History";
import {
  AddCircle,
  Duo,
  EmojiFlags,
  EmojiObjects,
  Explore,
  Feedback,
  HelpOutline,
  ListAlt,
  LiveTv,
  Movie,
  MusicNote,
  Settings,
  SportsEsports,
  SportsSoccer,
  Theaters,
  Wifi,
  YouTube,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.dark,
  },
  appBar: {
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,    
  },
  logo: {
    height: 27,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "none",
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
    color: theme.palette.background.light,    
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: "uppercase",
  },
  box:{
    display:"flex",
    marginRight: 15, 
    alignItems: 'center',
  }
}));

const videos = [
  {
    id: 1,
    title:'Especial JUNTAS com Bruna Louise, Niny Magalhães, Renata Said e Arianna Nutt ',
    channel: 'Bruna Louise',
    views: '429 mil de visualizações',
    date: "há 2 semanas",
    avatar: "/images/Bruna.jpg",
    thumb: "/images/thumb1.webp",
  },
  {
    id: 2,
    title:"JORNAL DE CASA #83 - COMO SE TORNAR O PIOR GOVERNO DA ESCOLA",
    channel: "Victor Camejo",
    views: "70 mil visualizações",
    date: "há 5 dias",
    avatar: "/images/victor.jpg",
    thumb: "/images/thumb2.webp",
  },
  {
    id: 3,
    title:
      "RÉVEILLON DE MAIÔ ROSA - Júnior Chicó - Stand Up Comedy",
    channel: "Júnior Chicó",
    views: "360 mil visualizações",
    date: "há 2 anos",
    avatar: "/images/chico.jpg",
    thumb: "/images/thumb3.webp",
  },
  {
    id: 4,
    title:
      "STAND UP - HOMEM É SONSO | PALOMA SANTOS",
    channel: "BH Comedy Club",
    views: "79 mil de visualizações",
    date: "há 1 ano",
    avatar: "/images/bhc.jpg",
    thumb: "/images/thumb4.webp",
  },
  {
    id: 5,
    title:
    "Rodrigo Marques - A Melhor História Que Eu Já Ouvi #tbt #quarentena - Stand Up Comedy",
    channel: "Rodrigo Marques",
    views: "372 mil de visualizações",
    date: "há 1 ano",
    avatar: "/images/rodrigo.jpg",
    thumb: "/images/thumb5.webp",
  },
  {
    id: 6,
    title: "NORDESTINO DE NOVELA - CRISS PAIVA, Nordestina de Sorocaba",
    channel: "Nordestando Show",
    views: "180 mil visualizações",
    date: "há 1 ano",
    avatar: "/images/nordestando.jpg",
    thumb: "/images/thumb6.webp",
  },
  {
    id: 7,
    title:
      "Pensamento Positivo e Xaveco | A Culpa É Da Carlota no Comedy Central",
    channel: "Comedy Central Brasi",
    views: "12 mil visualizações",
    date: "há 1 ano",
    avatar: "/images/comedyCentral.jpg",
    thumb: "/images/thumb7.webp",
  },
  {
    id: 8,
    title:
      "SOMOS LEVADOS PELA MODA - FLÁVIO ANDRADDE - STAND UP COMEDY",
    channel: "Flávio Andradde",
    views: "27 mil de visualizações",
    date: "há 6 dias",
    avatar: "/images/flavio.jpg",
    thumb: "/images/thumb8.webp",
  },
  {
    id: 9,
    title: "NÃO PODE RIR! Dubladores de PACIFICADOR",
    channel: "Castro Brothers ",
    views: "181 mil de visualizações",
    date: "há 1 semana",
    avatar: "/images/castro.jpg",
    thumb: "/images/thumb9.webp",
  },
  {
    id: 10,
    title: "Stand Up Comedy - FRATERNIDADE BETA GAMA - Niny Magalhães",
    channel: "Niny Magalhães",
    views: "8 mil de visualizações",
    date: "há 2 semanas",
    avatar: "/images/avatarNiny.jpg",
    thumb: "/images/thumb10.webp",
  },
  {
    id: 11,
    title: "AFONSO PADILHA - ESPALHANDO A PALAVRA - SHOW COMPLETO",
    channel: "Afonso Padilha",
    views: "9,4 mi de visualizações",
    date: "há 2 anos",
    avatar: "/images/afonso.jpg",
    thumb: "/images/thumb11.webp",
  },
  {
    id: 12,
    title: "Thiago Ventura l Especial Só Agradece l Legendado - ENG/ESP/PTBR [4K]",
    channel: "   Thiago Ventura    ",
    views: "24 mi de visualizações",
    date: "há 2 anos",
    avatar: "/images/thiago.jpg",
    thumb: "/images/thumb12.webp",
  },
];

function Home({darkMode, setDarkMode}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar  color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton            
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon/>
          </IconButton>
          <img
            src={theme.palette.type ==='dark' ? "/images/branco.png" : "/images/preto.png"}
            alt="logo do youtube"
            className={classes.logo}
          />
          <div className={classes.grow} />
          <Switch 
          value={darkMode} 
          onChange={() => setDarkMode(!darkMode)}
          className={classes.icons}
          />

          <IconButton className={classes.icons} >
            <VideoCall />
          </IconButton>

          <IconButton className={classes.icons}>
            <Apps />
          </IconButton>

          <IconButton className={classes.icons} >
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem
                  button
                  classes={{
                    root: classes.listItem,
                  }}
                >
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Início"}
                  />
                </ListItem>
                <ListItem
                  button
                  classes={{
                    root: classes.listItem,
                  }}
                >
                  <ListItemIcon>{<Explore />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Explorar"}
                  />
                </ListItem>
                <ListItem
                  button
                  classes={{
                    root: classes.listItem,
                  }}
                >
                  <ListItemIcon>{<Whatshot />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Em alta"}
                  />
                </ListItem>
                <ListItem
                  button
                  classes={{
                    root: classes.listItem,
                  }}
                >
                  <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Inscrições"}
                  />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem
                  button
                  classes={{
                    root: classes.listItem,
                  }}
                >
                  <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Biblioteca"}
                  />
                </ListItem>
                <ListItem
                  button
                  classes={{
                    root: classes.listItem,
                  }}
                >
                  <ListItemIcon>{<History />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Histórico"}
                  />
                </ListItem>
              </List>
              <Box p={7}>
                <Typography variant="body2">
                  Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AccountCircle />}
                  >
                    Fazer login
                  </Button>
                </Box>
              </Box>
              <Divider />
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <MusicNote />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Música"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SportsSoccer />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Esportes"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <SportsEsports />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Jogos"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Theaters />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Filmes"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <ListAlt />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Notícias"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <LiveTv />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Ao vivo"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <EmojiObjects />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Aprender"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Duo />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Vídeos do momento"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Movie />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Vídeo 360º"}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Procurar mais"}
                />
              </ListItem>
              <Divider />
              <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subheader}
                  >
                    Mais do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <YouTube />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"YouTube Premium"}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <Wifi />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={"Ao Vivo"}
                  />
                </ListItem>
              </List>
              <Divider />
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Configurações"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <EmojiFlags />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Histórico de denúncias"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <HelpOutline />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Ajuda"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <Feedback />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Enviar feedback"}
                />
              </ListItem>
            </div>
          </Drawer>
        </Hidden>
        <Box p={8}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendados
          </Typography>
          <Grid container spacing={5}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}                    
                  />
                   
                  <Box >
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>
                    <Box className={classes.box}>
                      <Avatar p={4} alt="avatar" src={item.avatar}/>
                      
                      <Typography                                               
                        variant="body2"
                        color="textSecondary"                      
                      >
                        {item.channel}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} • ${item.date}`}
                    </Typography>
                                        
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Home;
