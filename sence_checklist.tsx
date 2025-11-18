import React, { useState } from 'react';
import { CheckCircle2, Circle, ChevronDown, ChevronUp, BookOpen, Monitor, Wifi, FileText } from 'lucide-react';

const ChecklistApp = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});

  const modalidades = {
    presencial: {
      nombre: "Modalidad Presencial",
      icon: BookOpen,
      color: "bg-blue-500",
      requisitos: [
        {
          categoria: "Información General del Curso",
          items: [
            "Nombre del curso claro y comprensible (sin siglas, en español)",
            "Número de participantes adecuado a la naturaleza del curso",
            "Mínimo 8 horas cronológicas totales"
          ]
        },
        {
          categoria: "Características de Participantes",
          items: [
            "Descripción específica de puestos de trabajo",
            "Relación directa con el objetivo general/competencia",
            "Niveles de cualificación similares",
            "Evitar universo total de trabajadores de una empresa"
          ]
        },
        {
          categoria: "Competencia a Desarrollar",
          items: [
            "Incluye saber conceptual, procedimental y actitudinal",
            "Estructura: VERBO (infinitivo) + OBJETO + CONDICIÓN/CONTEXTO",
            "Relacionada con características de participantes",
            "Refleja función productiva específica"
          ]
        },
        {
          categoria: "Aprendizajes Esperados",
          items: [
            "Mínimo 2 objetivos específicos/aprendizajes esperados",
            "Estructura: VERBO infinitivo + OBJETO + CONDICIÓN",
            "Específicos, medibles y factibles",
            "Organizados de forma secuencial y progresiva",
            "Al menos un criterio de evaluación por aprendizaje esperado"
          ]
        },
        {
          categoria: "Contenidos",
          items: [
            "Asociados a aprendizajes esperados",
            "Descripción dinámica, asociativa y relacional",
            "Organizados de menor a mayor complejidad",
            "Conducen al dominio teórico-práctico"
          ]
        },
        {
          categoria: "Horas y Distribución",
          items: [
            "Declarar horas teóricas y prácticas",
            "Distribución congruente con competencia a desarrollar",
            "Permite desarrollo adecuado de cada aprendizaje esperado"
          ]
        },
        {
          categoria: "Facilitadores/Relatores",
          items: [
            "Seleccionar tipo de RUT (nacional o extranjero)",
            "Ingresar RUT del facilitador",
            "Completar experiencia profesional y docente",
            "Declarar costo total de facilitadores"
          ]
        },
        {
          categoria: "Técnicas Metodológicas",
          items: [
            "Declarar estrategias de enseñanza-aprendizaje",
            "Coherentes con enfoque por competencias",
            "Señalar recursos necesarios (salas, equipamiento, materiales)",
            "Explicar uso coherente de recursos en el aprendizaje"
          ]
        },
        {
          categoria: "Infraestructura, Equipamiento y Materiales",
          items: [
            "Espacio Físico (puede seleccionar varios ítems)",
            "Acondicionamiento Físico",
            "Equipamiento Audiovisual",
            "Equipos necesarios",
            "Material Didáctico",
            "Enumerar y describir material de apoyo"
          ]
        },
        {
          categoria: "Requisitos de Evaluación",
          items: [
            "Criterios de evaluación (mínimo uno por aprendizaje esperado)",
            "Tipo de instrumento (rúbrica, estudio de caso, otros)",
            "Descripción del instrumento",
            "Estándar de medición (porcentaje, nota, concepto)",
            "Requisito mínimo: 75% de asistencia para aprobar"
          ]
        },
        {
          categoria: "Requisitos de Ingreso",
          items: [
            "Habilidades y destrezas laborales previas necesarias",
            "Conocimientos de carácter laboral requeridos",
            "NO incluir: escolaridad, situación contractual, antigüedad"
          ]
        },
        {
          categoria: "Documentación Final",
          items: [
            "Firmar declaración jurada",
            "Enviar solicitud",
            "Estructura de costos coherente con modalidad y participantes"
          ]
        }
      ]
    },
    sincronica: {
      nombre: "E-Learning Sincrónico",
      icon: Wifi,
      color: "bg-green-500",
      requisitos: [
        {
          categoria: "Información General del Curso",
          items: [
            "Nombre del curso claro y comprensible (sin siglas, en español)",
            "Máximo 20 participantes",
            "Mínimo 8 horas cronológicas totales"
          ]
        },
        {
          categoria: "Características de Participantes",
          items: [
            "Descripción específica de puestos de trabajo",
            "Relación directa con el objetivo general/competencia",
            "Niveles de cualificación similares",
            "Conocimientos informáticos previos necesarios"
          ]
        },
        {
          categoria: "Competencia a Desarrollar",
          items: [
            "Incluye saber conceptual, procedimental y actitudinal",
            "Estructura: VERBO (infinitivo) + OBJETO + CONDICIÓN/CONTEXTO",
            "Relacionada con características de participantes",
            "Refleja función productiva específica"
          ]
        },
        {
          categoria: "Aprendizajes Esperados",
          items: [
            "Mínimo 2 objetivos específicos/aprendizajes esperados",
            "Específicos, medibles y factibles en modalidad e-learning",
            "Organizados de forma secuencial y progresiva",
            "Alcanzables en contexto sincrónico"
          ]
        },
        {
          categoria: "Plataforma E-learning",
          items: [
            "Ingresar link de plataforma (ej: https://zoom.us/es o https://workspace.google.com/products/meet/)",
            "Debe permitir interacción en tiempo real",
            "Todos los participantes conectados simultáneamente"
          ]
        },
        {
          categoria: "Contenidos",
          items: [
            "Asociados a aprendizajes esperados",
            "Incluye contenidos conceptuales, procedimentales y actitudinales",
            "Organizados de menor a mayor complejidad",
            "Adecuados para modalidad sincrónica"
          ]
        },
        {
          categoria: "Horas E-learning",
          items: [
            "Declarar horas e-learning totales",
            "Congruentes con competencia a desarrollar",
            "Permiten desarrollo de contenidos propuestos"
          ]
        },
        {
          categoria: "Facilitadores/Relatores",
          items: [
            "Seleccionar tipo de RUT",
            "Ingresar RUT del facilitador",
            "Experiencia profesional y docente",
            "Declarar costo total de facilitadores"
          ]
        },
        {
          categoria: "Técnicas Metodológicas",
          items: [
            "Declarar estrategias de enseñanza-aprendizaje e-learning",
            "Coherentes con enfoque por competencias",
            "Referencias al medio/plataforma",
            "Descripción de cómo se desarrollará según modalidad"
          ]
        },
        {
          categoria: "Infraestructura y Equipamiento Virtual",
          items: [
            "Espacio Virtual",
            "Equipamiento Audiovisual necesario",
            "Equipos requeridos",
            "Material Didáctico digital",
            "Descripción de características de plataforma"
          ]
        },
        {
          categoria: "Requisitos de Evaluación",
          items: [
            "Criterios de evaluación técnicos",
            "Instrumentos de evaluación y descripción",
            "Norma de evaluación: número y porcentaje",
            "Escala de notas y puntaje mínimo",
            "Declaración jurada para aprobación (empresa/OTEC y participantes)"
          ]
        },
        {
          categoria: "Requisitos de Ingreso",
          items: [
            "Conocimientos laborales previos necesarios",
            "Conocimientos informáticos elementales",
            "Conocimientos informáticos específicos para uso de plataforma",
            "Dominio necesario para logro de competencia"
          ]
        },
        {
          categoria: "Documentación Final",
          items: [
            "Firmar declaración jurada",
            "Enviar solicitud",
            "Costos coherentes con modalidad sincrónica"
          ]
        }
      ]
    },
    asincronica: {
      nombre: "E-Learning Asincrónico",
      icon: Monitor,
      color: "bg-purple-500",
      requisitos: [
        {
          categoria: "Información General del Curso",
          items: [
            "Nombre del curso claro y comprensible (sin siglas)",
            "1 participante por solicitud",
            "Mínimo 8 horas cronológicas totales"
          ]
        },
        {
          categoria: "Características de Participantes",
          items: [
            "Descripción específica de puestos de trabajo",
            "Relación directa con competencia a desarrollar",
            "Niveles de cualificación similares",
            "Conocimientos informáticos previos necesarios"
          ]
        },
        {
          categoria: "Competencia a Desarrollar",
          items: [
            "Incluye saber conceptual, procedimental y actitudinal",
            "Estructura: VERBO (infinitivo) + OBJETO + CONDICIÓN",
            "Relacionada con características de participantes",
            "Adecuada para autoaprendizaje"
          ]
        },
        {
          categoria: "Aprendizajes Esperados",
          items: [
            "Mínimo 2 aprendizajes esperados",
            "Específicos, medibles y evaluables objetivamente",
            "Alcanzables en modalidad e-learning asincrónica",
            "Organizados de forma secuencial y progresiva"
          ]
        },
        {
          categoria: "Plataforma/Acceso E-learning",
          items: [
            "Ingresar datos de acceso a plataforma LMS",
            "O datos de manual de autoaprendizaje",
            "Debe permitir aprendizaje a ritmo propio",
            "Actividades remotas en horarios no predeterminados"
          ]
        },
        {
          categoria: "Contenidos",
          items: [
            "Asociados a aprendizajes esperados",
            "Contenidos conceptuales, procedimentales y actitudinales",
            "Organizados de forma secuencial y progresiva",
            "Escala de menor a mayor complejidad"
          ]
        },
        {
          categoria: "Horas E-learning",
          items: [
            "Suma de horas teóricas y prácticas",
            "Permiten desarrollo de contenidos",
            "Congruentes con logro de aprendizajes esperados"
          ]
        },
        {
          categoria: "Facilitadores/Tutores",
          items: [
            "Registrar facilitadores/tutores (si aplica)",
            "Agregar experiencia profesional y docente",
            "Puede ser con facilitador o autoaprendizaje puro"
          ]
        },
        {
          categoria: "Técnicas Metodológicas",
          items: [
            "Describir técnicas de enseñanza-aprendizaje",
            "Coherentes con enfoque por competencias",
            "Referencia al medio/plataforma",
            "Descripción de desarrollo según modalidad asincrónica"
          ]
        },
        {
          categoria: "Material Didáctico",
          items: [
            "Especificar todos los recursos necesarios",
            "Enumerar e identificar material de apoyo",
            "Infografías, videos, PPT, documentos, simulaciones",
            "Videos interactivos, 2D, 3D, entre otros"
          ]
        },
        {
          categoria: "Infraestructura Digital",
          items: [
            "Descripción de plataforma educativa",
            "Características de donde será desarrollado el curso",
            "Permite desarrollo de actividades de aprendizaje"
          ]
        },
        {
          categoria: "Materiales y Equipos Técnicos",
          items: [
            "Aspectos mínimos de audio e imagen",
            "Micrófono, audio (parlantes/audífonos)",
            "Cámara de video (si necesario)",
            "Velocidad/conexión mínima de internet",
            "Configuración del computador",
            "Sistema operativo y navegadores",
            "Software particular requerido"
          ]
        },
        {
          categoria: "Requisitos de Evaluación",
          items: [
            "Criterios técnicos de evaluación",
            "Instrumentos de evaluación",
            "Norma de evaluación completa",
            "Número y porcentaje de evaluaciones",
            "Escala de notas y puntaje mínimo",
            "Declaración jurada para aprobación"
          ]
        },
        {
          categoria: "Requisitos de Ingreso",
          items: [
            "Conocimientos laborales previos",
            "Conocimientos informáticos elementales",
            "Conocimientos informáticos específicos",
            "Dominio de herramientas digitales necesarias"
          ]
        },
        {
          categoria: "Revisión de Plataforma (Tercera Etapa)",
          items: [
            "Navegación: fácil de navegar e intuitiva",
            "Variedad de contenido: recursos diversos para estilos de aprendizaje",
            "Interactividad: dinámica y atractiva",
            "Accesibilidad: adaptada a diferentes dispositivos",
            "Autoevaluación: herramientas efectivas de medición",
            "Contenidos: relevantes y completos",
            "Multimedia: recursos que mejoran comprensión",
            "Cada criterio debe estar en rango BUENO o EXCELENTE"
          ]
        },
        {
          categoria: "Revisión Instrumento Evaluación Final",
          items: [
            "Relevancia: relacionado con material de capacitación",
            "Claridad: preguntas claras y precisas",
            "Variedad: diversos tipos de preguntas",
            "Retroalimentación: detallada y constructiva",
            "Validez: medición efectiva del progreso",
            "Cada criterio debe estar en rango BUENO o EXCELENTE"
          ]
        },
        {
          categoria: "Estructura de Costos",
          items: [
            "Costos de facilitadores/tutores",
            "Costos de infraestructura",
            "Costos de materiales y equipos",
            "Costos administrativos y generales",
            "Costos de utilidades",
            "Coherencia con modalidad y número de participantes"
          ]
        },
        {
          categoria: "Documentación Final",
          items: [
            "Firmar declaración jurada",
            "Enviar solicitud",
            "Proceder al pago tras aprobación"
          ]
        }
      ]
    },
    autoaprendizaje: {
      nombre: "A Distancia - Autoaprendizaje",
      icon: FileText,
      color: "bg-orange-500",
      requisitos: [
        {
          categoria: "Información General del Curso",
          items: [
            "Nombre del curso claro y comprensible (sin siglas)",
            "1 participante por solicitud",
            "Mínimo 8 horas cronológicas totales"
          ]
        },
        {
          categoria: "Características de Participantes",
          items: [
            "Descripción específica de puestos de trabajo",
            "Relación directa con competencia",
            "Niveles de cualificación similares",
            "Conocimientos informáticos previos"
          ]
        },
        {
          categoria: "Competencia a Desarrollar",
          items: [
            "Saber conceptual, procedimental y actitudinal",
            "Estructura: VERBO + OBJETO + CONDICIÓN",
            "Adecuada para autoaprendizaje sin facilitador",
            "Relacionada con características de participantes"
          ]
        },
        {
          categoria: "Aprendizajes Esperados",
          items: [
            "Mínimo 2 aprendizajes esperados",
            "Específicos, medibles y factibles",
            "Alcanzables mediante autoaprendizaje",
            "Organizados secuencial y progresivamente"
          ]
        },
        {
          categoria: "Material de Autoaprendizaje",
          items: [
            "Ingresar datos de manual de autoaprendizaje",
            "O datos de ingreso a plataforma",
            "Material radicado en libro u otro soporte descargable",
            "Permite aprendizaje según propios tiempos"
          ]
        },
        {
          categoria: "Contenidos",
          items: [
            "Asociados a aprendizajes esperados",
            "Contenidos conceptuales, procedimentales y actitudinales",
            "Organizados de menor a mayor complejidad",
            "Todos los temas necesarios para logro de competencia"
          ]
        },
        {
          categoria: "Horas Cronológicas",
          items: [
            "Indicar horas e-learning totales",
            "Permiten desarrollo de contenidos",
            "Adecuadas para logro de aprendizajes esperados"
          ]
        },
        {
          categoria: "Técnicas Metodológicas",
          items: [
            "Describir técnicas de autoaprendizaje",
            "Coherentes con enfoque por competencias",
            "Referencia al medio/soporte utilizado",
            "Descripción de cómo se desarrolla el curso"
          ]
        },
        {
          categoria: "Material Didáctico",
          items: [
            "Especificar recursos necesarios",
            "Describir características principales del manual",
            "Material de apoyo para transferencia de aprendizaje"
          ]
        },
        {
          categoria: "Infraestructura",
          items: [
            "Detallar infraestructura necesaria (si aplica)",
            "Descripción de requisitos para realizar el curso"
          ]
        },
        {
          categoria: "Materiales y Equipos",
          items: [
            "Detallar materiales necesarios (si aplica)",
            "Equipamiento necesario para desarrollo adecuado",
            "Especificaciones técnicas si se requieren"
          ]
        },
        {
          categoria: "Requisitos de Evaluación",
          items: [
            "Criterios técnicos de evaluación",
            "Instrumentos de evaluación",
            "Norma de evaluación completa",
            "Número y porcentaje de evaluaciones",
            "Escala de notas y puntaje mínimo",
            "Declaración jurada para aprobación"
          ]
        },
        {
          categoria: "Requisitos de Ingreso",
          items: [
            "Conocimientos laborales previos necesarios",
            "Conocimientos informáticos elementales",
            "Conocimientos informáticos específicos",
            "Capacidad de autoaprendizaje"
          ]
        },
        {
          categoria: "Revisión del Manual (Tercera Etapa)",
          items: [
            "Verificación de elementos curriculares: orden y completitud",
            "Pertinencia del contenido: relevante para la competencia",
            "Organización y estructura: lógica y progresiva",
            "Uso de recursos visuales: apoyan naturaleza del curso",
            "Ejercicios de autoevaluación: medición de progreso",
            "Cada criterio debe estar en rango BUENO o EXCELENTE"
          ]
        },
        {
          categoria: "Revisión Instrumento Evaluación Final",
          items: [
            "Relevancia: relacionado con material",
            "Claridad: preguntas claras y precisas",
            "Variedad: diversos tipos de preguntas",
            "Retroalimentación: detallada y constructiva",
            "Validez: medición efectiva del progreso",
            "Cada criterio debe estar en rango BUENO o EXCELENTE"
          ]
        },
        {
          categoria: "Estructura de Costos",
          items: [
            "Costos de facilitadores (si aplica)",
            "Costos de infraestructura",
            "Costos de materiales y equipos",
            "Costos administrativos y generales",
            "Costos de utilidades"
          ]
        },
        {
          categoria: "Documentación Final",
          items: [
            "Firmar declaración jurada",
            "Enviar solicitud",
            "Proceder al pago tras aprobación"
          ]
        }
      ]
    }
  };

  const toggleItem = (modalidad, categoriaIdx, itemIdx) => {
    const key = `${modalidad}-${categoriaIdx}-${itemIdx}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getProgress = (modalidad) => {
    const mod = modalidades[modalidad];
    let total = 0;
    let checked = 0;
    
    mod.requisitos.forEach((cat, catIdx) => {
      cat.items.forEach((_, itemIdx) => {
        total++;
        if (checkedItems[`${modalidad}-${catIdx}-${itemIdx}`]) {
          checked++;
        }
      });
    });
    
    return { checked, total, percentage: Math.round((checked / total) * 100) };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Checklist Requisitos Cursos SENCE
          </h1>
          <p className="text-slate-600 text-lg">
            Resolución Exenta N° 1560 - 30 de abril de 2024
          </p>
          <p className="text-slate-500 mt-2">
            Requisitos mínimos normativos por modalidad de ejecución
          </p>
        </div>

        {/* Modalidades */}
        <div className="space-y-6">
          {Object.entries(modalidades).map(([key, mod]) => {
            const Icon = mod.icon;
            const progress = getProgress(key);
            const isExpanded = expandedSection === key;

            return (
              <div key={key} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Header de Modalidad */}
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : key)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${mod.color} p-3 rounded-xl text-white`}>
                      <Icon size={28} />
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-bold text-slate-800">
                        {mod.nombre}
                      </h2>
                      <p className="text-sm text-slate-500 mt-1">
                        {progress.checked} de {progress.total} requisitos completados
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-3xl font-bold text-slate-800">
                        {progress.percentage}%
                      </div>
                      <div className="text-xs text-slate-500">Completado</div>
                    </div>
                    {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>

                {/* Progress Bar */}
                <div className="px-6 pb-2">
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${mod.color} transition-all duration-500`}
                      style={{ width: `${progress.percentage}%` }}
                    />
                  </div>
                </div>

                {/* Contenido expandible */}
                {isExpanded && (
                  <div className="p-6 pt-4 border-t border-slate-100">
                    <div className="space-y-6">
                      {mod.requisitos.map((categoria, catIdx) => (
                        <div key={catIdx} className="bg-slate-50 rounded-xl p-5">
                          <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${mod.color}`} />
                            {categoria.categoria}
                          </h3>
                          <div className="space-y-2">
                            {categoria.items.map((item, itemIdx) => {
                              const isChecked = checkedItems[`${key}-${catIdx}-${itemIdx}`];
                              return (
                                <button
                                  key={itemIdx}
                                  onClick={() => toggleItem(key, catIdx, itemIdx)}
                                  className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors text-left group"
                                >
                                  {isChecked ? (
                                    <CheckCircle2 
                                      size={22} 
                                      className={`${mod.color.replace('bg-', 'text-')} flex-shrink-0 mt-0.5`}
                                    />
                                  ) : (
                                    <Circle 
                                      size={22} 
                                      className="text-slate-300 group-hover:text-slate-400 flex-shrink-0 mt-0.5"
                                    />
                                  )}
                                  <span className={`${isChecked ? 'text-slate-600 line-through' : 'text-slate-700'} transition-all`}>
                                    {item}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 bg-slate-800 text-white rounded-2xl p-6 text-center">
          <p className="text-sm opacity-90">
            ⚠️ <strong>Importante:</strong> Todos los cursos requieren un mínimo de 8 horas cronológicas totales
          </p>
          <p className="text-sm opacity-75 mt-2">
            Para cursos regulados por instituciones del Estado, verificar autorizaciones en plataforma RUDO
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChecklistApp;