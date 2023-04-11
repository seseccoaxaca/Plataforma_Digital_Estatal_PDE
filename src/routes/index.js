import Home from '../components/HomeV2/Home';
import About from '../components/AboutV2/About';
import Terminos from '../components/Terminos/Terminos';
import Faq from '../components/FAQ/index';
import HelpDesk from '../components/HelpDesk/HelpDesk';
import Contacto from '../components/Contacto/Contacto';

import Sistema2 from '../components/Sistema2/Index';
import Sancionados from '../components/Sancionados/Index';
import Sistema4 from '../components/Sistema4';
import Sistema5 from '../components/Sistema5';
import Sistema6 from '../components/Sistema6/index';
import Sistema7 from '../components/Sistema6/index';
import Sistema8 from '../components/Sistema6/index';
import Sistema9 from '../components/Sistema6/index';

import Validador from '../components/Validador/index';
import Especificaciones from '../components/Especificaciones/Landing/Especificaciones';
import DeclaracionesEspecificaciones from '../components/Especificaciones/Declaraciones/Declaraciones';
import EspecificacionesSancionados from '../components/Especificaciones/Sancionados/Sancionados';
import SpecsS2 from '../components/Especificaciones/ServidoresIntervienen/ServidoresIntervienen';
import SpecsS6 from '../components/Especificaciones/Contrataciones/index';
import Cobertura from '../components/Cobertura/Cobertura';
import CoberturaVistaIndividual from "../components/Cobertura/VistaDetalleEstado";

// import DeclaracionesS1 from '../components/Declaraciones';
import DeclaracionesS1v2 from '../components/Declaraciones2';

import IconS2 from "../assets/rediseno/ico_sistemas/ico_s2_color.svg";
import IconS3 from "../assets/rediseno/ico_sistemas/ico_s3_color.svg";
import IconS6 from "../assets/rediseno/ico_sistemas/ico_s6_color.svg";
import IconS1 from "../assets/rediseno/ico_sistemas/ico_s1_color.svg";
import IconS4 from "../assets/rediseno/ico_sistemas/ico_s4_color.svg";
import IconS5 from "../assets/rediseno/ico_sistemas/ico_s5_color.svg";
import IconS7 from "../assets/rediseno/ico_sistemas/ico_s7_color.svg";
import IconS8 from "../assets/rediseno/ico_sistemas/ico_s8_color.svg";
import IconS9 from "../assets/rediseno/ico_sistemas/ico_s9_color.svg";
import IconFAQ from "../assets/rediseno/ico_faq.svg";
import IconEspecificaciones from "../assets/rediseno/ico_especificaciones.svg";
import IconAbout from "../assets/rediseno/ico_que-es-PDN.svg";
import IconHelpDesk from "../assets/rediseno/ico_mesa-ayuda.svg";
import IconDatosdeInteres from "../assets/rediseno/datosdeinteres.svg";
import IconContacto from "../assets/rediseno/ico_contacto.svg";
import IconValidador from "../assets/rediseno/validador.svg";
import IconCobertura from "../assets/rediseno/ico_cobertura.svg";


/*
Para que la ruta pueda usarse con el Header genérico debe contar con:
name: "Nombre completo de la sección",
shortName: "Nombre corto de la sección, se usa en el breadcrum",
color: "#", Color que se usara en la fuente y breadcrum
icon: IconS1, Icono de la sección
 */
const pdnRoutes = [
	{
		exact: true,
		path: '/',
		component:Home,
		private: false,
	},
	{
		exact: false,
		path: '/declaraciones',
		component: DeclaracionesS1v2,
		private: false,
		name: "Sistema de evolución patrimonial, declaración de intereses y constancias de presentación de declaración fiscal",
		shortName: "Sistema de Declaraciones",
		color: "#F8CAC4",
		icon: IconS1,
		disabled: false,
		type: "system"
	},
	{
		exact: true,
		path: '/servidores',
		component: Sistema2,
		private: false,
		name: "Sistema de los Servidores públicos y particulares que intervengan en procedimientos de contrataciones públicas",
		shortName: "Sistema de Servidores Públicos en contrataciones",
		color: "#D8ACD8",
		icon: IconS2,
		disabled: false,
		type: "system"
	},
	{
		exact: true,
		path: '/sancionados',
		component: Sancionados,
		private: false,
		name: "Catálogo de empresas prestadoras de servicios de los Poderes del Estado y Municipios",
		shortName: "Empresas Prestadoras de Servicios",
		color: "#C6C1EB",
		icon: IconS3,
		disabled: false,
		type:'system'
	},
	{
		exact: true,
		path: '/fiscalizacion',
		component: Sistema4,
		private: false,
		name: "Sistema Estatal de Servidores públicos y particulares sancionados",
		shortName: "Sistema de Sancionados",
		color: "#C4DDB6",
		icon: IconS4,
		disabled: true,
		type: "system"
	},
	{
		exact: true,
		path: '/denuncias',
		component: Sistema5,
		private: false,
		name: "Sistema de información y comunicación del Sistema Estatal",
		shortName: "Sistema de Información",
		color: "#34c9b2",
		icon: IconS5,
		disabled: true,
		type: "system"
	},
	{
		exact: true,
		path: '/contrataciones',
		component: Sistema6,
		private: false,
		name: "Sistema de denuncias públicas, de faltas administrativas y hechos de corrupción",
		shortName: "Sistema de Denuncias",
		color: "#B2DBEB",
		icon: IconS6,
		disabled: false,
		type: "system"
	},
	{
		exact: true,
		path: '/contrataciones',
		component: Sistema7,
		private: false,
		name: "Sistema de Información Pública de Contrataciones",
		shortName: "Sistema de Contrataciones",
		color: "#B2DBEB",
		icon: IconS7,
		disabled: false,
		type: "system"
	},
	{
		exact: true,
		path: '/contrataciones',
		component: Sistema8,
		private: false,
		name: "Sistema de seguimiento a las recomendaciones emitidas",
		shortName: "Sistema de Seguimiento",
		color: "#B2DBEB",
		icon: IconS8,
		disabled: false,
		type: "system"
	},
	{
		exact: true,
		path: '/contrataciones',
		component: Sistema9,
		private: false,
		name: "Indicadores de evaluación",
		shortName: "Sistema de Indicadores",
		color: "#B2DBEB",
		icon: IconS9,
		disabled: false,
		type: "system"
	},
	{
		exact: true,
		path: '/especificaciones',
		component: Especificaciones,
		private: false,
		name: "Especificaciones técnicas",
		shortName: "Especificaciones",
		color: "#f2f2f2",
		icon: IconEspecificaciones
	},
	{
		exact: true,
		path: '/especificaciones/s1',
		component: DeclaracionesEspecificaciones,
		private: false,							
		name: "Sistema de evolución patrimonial, de declaración de intereses y constancia de presentación de declaración fiscal",
		shortName: "Especificaciones técnicas S1",
		subName:"Especificaciones técnicas",
		color: "#F8CAC4",
		icon: IconS1		
	},
	{
		exact: true,
		path: '/especificaciones/s2',
		component: SpecsS2,
		private: false,
		name: "Sistema de los servidores públicos que intervengan en procedimientos de contrataciones públicas",
		subName:"Especificaciones técnicas",
		shortName: "Especificaciones técnicas S2",
		color: "#D8ACD8",
		icon: IconS2,
	},
	{
		exact: true,
		path: '/especificaciones/s3',
		component: EspecificacionesSancionados,
		private: false,
		name: "Sistema nacional de servidores públicos y particulares sancionados",
		subName:"Especificaciones técnicas",
		shortName: "Especificaciones técnicas S3",
		color: "#BCB9E9",
		icon: IconS3,
	},
	{
		exact: true,
		path: '/especificaciones/s6',
		component: SpecsS6,
		private: false,
		name: "Sistema de información pública de contrataciones",
		subName:"Especificaciones técnicas",
		shortName: "Especificaciones técnicas S6",
		color: "#B2DBEB",
		icon: IconS6,
	},
	{
		exact: true,
		path: '/about',
		component: About,
		private: false,
		name: "¿Qué es la Plataforma Digital Estatal?",
		shortName: "¿Qué es la PDE?",
		color: "#f2f2f2",
		icon: IconAbout
	},
	{
		exact: true,
		path: '/terminos',
		component: Terminos,
		private: false,
		name: "Términos de uso",
		shortName: "Términos de uso",
		color: "#f2f2f2",
	},
	{
		exact: true,
		path: '/faq',
		component: Faq,
		private: false,
		name: "Preguntas frecuentes",
		shortName: "FAQ",
		color: "#f2f2f2",
		icon: IconFAQ
	},
	{
		exact: true,
		path: '/validador',
		component: Validador,
		private: false,
		name: "Validador",
		shortName: "Validador",
		color: "#f2f2f2",
		icon: IconValidador
	},
	{
		exact: true,
		path: '/mesa-de-ayuda',
		component: HelpDesk,
		private: false,
		name: "Datos de Interes",
		shortName: "",
		color: "#f2f2f2",
		icon: IconDatosdeInteres
	},
	{
		exact: true,
		path: '/contacto',
		component: Contacto,
		private: false,
		name: "Contacto",
		shortName: "",
		color: "#f2f2f2",
		icon: IconContacto
	},
	{
		exact: true,
		path: '/cobertura',
		component: Cobertura,
		private: false,
		name: "Indicadores de conexiones",
		shortName: "Indicadores de conexiones",
		color: "#f2f2f2",
	},
	{
		exact: true,
		path: '/cobertura/:id_estado',
		component: CoberturaVistaIndividual,
		private: false,
		name: "Indicadores de conexiones",
		shortName: "Indicadores de conexiones",
		color: "#f2f2f2",
	}
];

export default pdnRoutes;
