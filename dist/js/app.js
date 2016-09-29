var app = angular.module('coderoasters',['pascalprecht.translate', 'ngMessages']);

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {    
    CHANGELANG: 'Cambiar a idioma Español',
    BUTTON_LANG_EN: 'ES',
    HOME: 'Home',
    TITLE: 'CodeRoasters',
    GREETINGS: 'We code your ideas!',
    WELCOME2: "Let's Make Software",
    TELLMEMORE: 'Know us',    
    ABOUT: 'About',
    ABOUT2: 'Who are we?',
    ABOUT3: 'A TEAM OF DEVELOPERS',
    ABOUT4: 'Senior Engineers',
    ABOUT5: 'We are a small team of software engineers based in San José, Costa Rica',
    ABOUT6: 'WITH GLOBAL VISION',
    ABOUT7: 'Worldwide Collaboration',
    ABOUT8: 'With the mission to collaborate with our talent to projects anywhere in the world',
    ABOUT9: 'PRODUCT ORIENTED',
    ABOUT10: 'Effective Development',
    ABOUT11: 'Using an incremental development approach based on functional deliverables',
    SERVICES: 'Services',
    SERVICES2: 'What do we do?',
    PORTFOLIO: 'Portfolio',
    TEAM: 'Team',
    OURTEAM:'Our Great Team',
    OURTEAMSUB:'Let us give you the most exciting experience building your ideas!',
    SERVICESDESC: 'Some of our services are',
    WEBDEV: 'Web Development',    
    WEBDEVDESC: 'We make awesome websites and web applications with the latest technologies',
    MOBILEDEV:'Mobile Development',
    MOBILEDEVDESC:"Imagine an App... We'll make it possible for Android and iOS",
    GAMESDEV:'Video Games',
    GAMESDEVDESC:"Who doesn't like videogames? It's time to have fun coding entertaining software",  
    WEUSE:"We love using",
    CONTACT: 'Contact',
    CONTACT2: 'Contact us',
    CONTACT3: 'Tell us how we can help you',
    CONTACT4: 'Your Name *',
    CONTACT5: 'Please enter your name',
    CONTACT6: 'Your Email *',
    CONTACT7: 'Please enter your email address',
    CONTACT8: 'Your Phone *',
    CONTACT9: 'Please enter your phone number',
    CONTACT10: 'Your Message *',
    CONTACT11: 'Please enter a message',
    CONTACT12: 'Send Message'
});

  /*
   'We are a small team of software engineers 
    based in San José, Costa Rica. 
    We have the mission to collaborate with our talent to projects anywhere in the world. 
    We use an incremental development approach based on functional deliverables.'
  */

  $translateProvider.translations('es', {
    CHANGELANG: 'Switch to English Language',
    BUTTON_LANG_EN: 'EN',
    HOME: 'Inicio',
    TITLE: 'CodeRoasters',
    GREETINGS: 'Convertimos en software sus ideas',
    WELCOME2: '¡Manos a la obra!',
    TELLMEMORE: 'Conózcanos',
    ABOUT: '¿Quiénes somos?', 
    ABOUT2: '¿Quiénes somos?',
    ABOUT3: 'UN EQUIPO DE PROGRAMADORES',
    ABOUT4: 'Ingenieros Experimentados',
    ABOUT5: 'Somos un pequeño equipo de ingenieros de software establecido en San José, Costa Rica',
    ABOUT6: 'CON VISION GLOBAL',
    ABOUT7: 'Colaborando en todo el mundo',
    ABOUT8: 'Tenemos la misión de aportar nuestro talento a proyectos por implementar en cualquier parte del Mundo',
    ABOUT9: 'ORIENTADOS AL PRODUCTO',
    ABOUT10: 'Desarrollo Efectivo',
    ABOUT11: 'Entregamos los productos funcionales de manera incremental', 
    SERVICES: 'Servicios',
    SERVICES2: '¿Qué hacemos?',
    PORTFOLIO: 'Portafolio',
    TEAM: 'Equipo',
    OURTEAM:'Nuestro Grandioso equipo',
    OURTEAMSUB:'¡Déjenos darle la mejor experiencia construyendo sus ideas!',
    SERVICESDESC: 'Algunos de nuestros servicios son',
    WEBDEV: 'Desarrollo Web',    
    WEBDEVDESC: 'Hacemos portales Web Completos y Aplicaciones a la medida con tecnologías actuales',
    MOBILEDEV:'Desarrollo para Móviles',
    MOBILEDEVDESC:'La app que a usted se le ocurra, la hacemos posible para Android y iOS',
    GAMESDEV:'Video Juegos',
    GAMESDEVDESC:'¿A quién no le gustan los video juegos? Es tiempo de divertirse haciendo software para entretenimiento',
    WEUSE:"Nos encanta Usar",
    CONTACT: 'Contacto',
    CONTACT2: 'Contáctenos',
    CONTACT3: 'Díganos cómo le podemos ayudar',
    CONTACT4: 'Su nombre *',
    CONTACT5: 'Por favor, ingrese su nombre',
    CONTACT6: 'Su correo electrónico *',
    CONTACT7: 'Por favor, ingrese su correo electrónico',
    CONTACT8: 'Su número de teléfono *',
    CONTACT9: 'Por favor, ingrese su número de teléfono',
    CONTACT10: 'Su mensaje *',
    CONTACT11: 'Por favor, ingrese su mensaje',
    CONTACT12: 'Enviar Mensaje'
});
var lg = localStorage.getItem('lan') || 'en';
  $translateProvider.preferredLanguage(lg);
});


app.controller('MainCtrl', function ($scope, $translate) {
  angular.element(document).ready(function () {
    setTimeout(function () {
       $('#loading-div').fadeOut('slow');
    },1000);
      
    });
  $scope.language = localStorage.getItem('lan') || 'en';
  $scope.changeLanguage = function (key) {
    $scope.language = key;
    localStorage.setItem('lan',$scope.language);
    $translate.use(key);
  };
});

