export class persona{
    id?: Number;
    nombre: String;
    apellido: String;
    acerca: String;
    experiencia: String;
    experienciaImg1: String;
      
    educacion: String;
    educacionImg1: String;
    hardsoft: String;
    hardsoftPor:String;

    hardsoft_html: String;
    hardsoft_css: String;
    hardsoft_js: String;
    hardsoft_angular: String;
    hardsoft_java: String;
    hardsoft_mysql: String;

    hardsoft_comunicacion: String;
    hardsoft_creatividad: String;
    hardsoft_pensamientocritico: String;
    hardsoft_liderazgo: String;
    hardsoft_gestiondeltiempo: String;
    hardsoft_actitudpositiva: String;


    proyecto: String;
    proyectoImg1: String;
  

   

    constructor(
        nombre: String,
        apellido: String,   //falta agregar los otros campos
        acerca: String,
        educacion: String,
        educacionImg1: String,
               
        experiencia: String,
        
        experienciaImg1: String,
                
        hardsoft: String,
        hardsoftPor: String,

        hardsoft_html: String,
        hardsoft_css: String,
        hardsoft_js: String,
        hardsoft_angular: String,
        hardsoft_java: String,
        hardsoft_mysql: String,


        hardsoft_comunicacion: String,
        hardsoft_creatividad: String,
        hardsoft_pensamientocritico: String,
        hardsoft_liderazgo: String,
        hardsoft_gestiondeltiempo: String,
        hardsoft_actitudpositiva: String,
    



        proyecto: String,
        proyectoImg1: String,
        

    ){
        this.nombre= nombre;
        this.apellido= apellido;
        this.acerca= acerca;
        
        this.educacion=educacion;   
    
        this.educacionImg1=educacionImg1;
           
        this.experiencia= experiencia;
      
        this.experienciaImg1= experienciaImg1;
        
        this.hardsoft= hardsoft;
        this.hardsoftPor=hardsoftPor;

        this.hardsoft_html=hardsoft_html;
        this.hardsoft_css=hardsoft_css;
        this.hardsoft_js=hardsoft_js;
        this.hardsoft_angular=hardsoft_angular;
        this.hardsoft_java=hardsoft_java;
        this.hardsoft_mysql=hardsoft_mysql;


        this.hardsoft_comunicacion=hardsoft_comunicacion;
        this.hardsoft_creatividad=hardsoft_creatividad;
        this.hardsoft_pensamientocritico=hardsoft_pensamientocritico;
        this.hardsoft_liderazgo=hardsoft_liderazgo;
        this.hardsoft_gestiondeltiempo= hardsoft_gestiondeltiempo;
        this.hardsoft_actitudpositiva=hardsoft_actitudpositiva;
    



        this.proyecto=proyecto;
     
        this.proyectoImg1=proyectoImg1;
        

        
    }
}    /* aca van los campos a leer de la sb */