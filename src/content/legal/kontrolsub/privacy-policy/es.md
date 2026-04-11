# Política de Privacidad — KontrolSub

**Versión:** 1.0  
**Última actualización:** 11 de abril de 2026  
**Desarrollador:** Vektor Digital  
**Contacto:** contato@vektordigital.com.br

---

## 1. Introducción

La privacidad de nuestros usuarios es una prioridad. Esta Política de Privacidad describe, con transparencia, qué datos recopila la aplicación **KontrolSub**, cómo los utiliza, con quién los comparte y cómo puede ejercer sus derechos.

Esta política cumple con el **Reglamento General de Protección de Datos (RGPD — Reglamento UE 2016/679)** y, en lo que sea aplicable, con la **Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD)** de España y demás legislaciones aplicables.

---

## 2. Datos Recopilados

### 2.1 Datos de Identificación y Autenticación

Al crear su cuenta en KontrolSub, los siguientes datos son proporcionados por los servicios de autenticación utilizados:

| Dato | Fuente | Condición |
|---|---|---|
| UID único (identificador interno de Firebase) | Firebase Authentication | Siempre (cuenta anónima) |
| Dirección de correo electrónico | Google o Apple | Solo si el usuario vincula una cuenta |
| Nombre completo | Google o Apple | Solo si el usuario vincula una cuenta |

> **Nota sobre Apple:** Sign In With Apple permite al usuario ocultar su correo electrónico real, proporcionando una dirección de correo de retransmisión generada por Apple. KontrolSub acepta y respeta esta preferencia.

### 2.2 Datos Financieros Ingresados por el Usuario

Al registrar suscripciones, los siguientes datos se almacenan en Cloud Firestore, asociados exclusivamente al UID del usuario:

- Nombre del servicio (p. ej., "Netflix", "Spotify").
- Categoría de la suscripción.
- Importe y moneda del cobro.
- Periodicidad (mensual, anual, semanal).
- Fecha de cobro.
- Método de pago (campo de texto libre — **el usuario no debe ingresar números completos de tarjetas**).
- URL del servicio para gestión de la suscripción.
- Notas personales sobre la suscripción.
- Indicación del período de prueba gratuito (*trial*) y fecha de vencimiento.
- Estado de activación de la suscripción.

### 2.3 Historial de Pagos

KontrolSub genera y almacena automáticamente un **historial mensual de gastos** en Firestore, calculado en base a las suscripciones registradas. Estos datos se utilizan para mostrar informes de gastos al usuario.

### 2.4 Preferencias Locales

Los datos de preferencias del usuario (como idioma y estado de primer uso) se almacenan **localmente en el dispositivo** mediante `SharedPreferences`. Estos datos **no se transmiten** a servidores externos.

### 2.5 Datos Recopilados Automáticamente por Terceros

KontrolSub utiliza servicios de terceros que pueden recopilar datos de forma independiente conforme a sus propias políticas:

| Servicio | Finalidad | Política de Privacidad |
|---|---|---|
| **Google Firebase** | Autenticación, base de datos (Firestore) | [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) |
| **Google Sign-In** | Inicio de sesión con cuenta Google | [policies.google.com/privacy](https://policies.google.com/privacy) |
| **Sign In with Apple** | Inicio de sesión con cuenta Apple | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| **RevenueCat** | Gestión de suscripciones y compras dentro de la app | [revenuecat.com/privacy](https://revenuecat.com/privacy) |

---

## 3. Uso de los Datos

Los datos recopilados se utilizan exclusivamente para:

1. **Autenticación:** Crear, mantener e identificar la cuenta del usuario.
2. **Funcionalidad principal:** Mostrar, calcular y organizar las suscripciones registradas.
3. **Notificaciones locales:** Programar y enviar recordatorios de vencimiento de *trials* y cobros futuros.
4. **Informes:** Generar gráficos e historial de gastos mensuales.
5. **Gestión de planes:** Procesar y verificar suscripciones premium dentro de la App mediante RevenueCat.

**KontrolSub no utiliza sus datos con fines publicitarios, no los vende y no los comparte con terceros más allá de los servicios listados en la Sección 2.5.**

---

## 4. Notificaciones

La Aplicación solicita permiso para enviar **notificaciones locales** a su dispositivo. Estas notificaciones se generan y muestran exclusivamente en su dispositivo y **no implican comunicación con servidores externos**. Puede revocar este permiso en cualquier momento en la configuración de su sistema operativo.

---

## 5. Almacenamiento y Seguridad

Los datos sincronizados se almacenan en la infraestructura de **Google Firebase (Cloud Firestore)**, que adopta estándares de seguridad robustos, incluyendo cifrado en tránsito (TLS) y en reposo.

Los datos están organizados de modo que **cada usuario accede exclusivamente a sus propios datos**, garantizados por las Reglas de Seguridad de Firestore vinculadas al UID de autenticación.

Vektor Digital emplea esfuerzos razonables para proteger su información, pero ningún sistema de seguridad es infalible. Recomendamos mantener el sistema operativo y la Aplicación siempre actualizados.

---

## 6. Retención de Datos

Los datos se retienen mientras el usuario mantenga una cuenta activa en la Aplicación. Al solicitar la eliminación de la cuenta, todos los datos asociados al UID del usuario serán eliminados de Cloud Firestore en un plazo razonable.

---

## 7. Derechos del Usuario (RGPD / LOPDGDD)

De conformidad con el RGPD y la LOPDGDD, el usuario tiene los siguientes derechos:

| Derecho | Descripción |
|---|---|
| **Acceso** | Saber si sus datos están siendo tratados y acceder a la información almacenada. |
| **Rectificación** | Solicitar la corrección de datos incompletos, inexactos o desactualizados. |
| **Supresión** | Solicitar la eliminación de sus datos personales ("derecho al olvido"). |
| **Portabilidad** | Solicitar la transferencia de sus datos a otro servicio. |
| **Revocación del consentimiento** | Retirar el consentimiento al tratamiento de datos en cualquier momento. |
| **Oposición** | Oponerse al tratamiento de datos realizado sin su consentimiento. |
| **Limitación** | Solicitar la restricción del tratamiento en determinadas circunstancias. |

Para ejercer cualquiera de estos derechos, póngase en contacto en: **contato@vektordigital.com.br**

---

## 8. Datos de Menores

KontrolSub **no está destinado a menores de 14 años** (según la normativa española; o 13 años en otras jurisdicciones). No recopilamos intencionalmente datos personales de menores. Si tomamos conocimiento de que hemos recopilado datos de un menor sin el consentimiento de sus tutores, tomaremos las medidas necesarias para eliminar dicha información de inmediato.

---

## 9. Transferencia Internacional de Datos

Los datos se almacenan en servidores de Google (Firebase) que pueden estar ubicados fuera de España o de la Unión Europea. Google adopta mecanismos de cumplimiento reconocidos internacionalmente para dichas transferencias, incluyendo las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.

---

## 10. Modificaciones de esta Política

El desarrollador se reserva el derecho de actualizar esta Política en cualquier momento. Las notificaciones sobre cambios relevantes estarán disponibles en la Aplicación. El uso continuado tras la publicación de los cambios constituye la aceptación de la nueva versión.

---

## 11. Contacto y Delegado de Protección de Datos (DPD)

Para preguntas, solicitudes o reclamaciones relacionadas con la privacidad y la protección de datos, contáctenos en:

**Correo electrónico:** contato@vektordigital.com.br  
**Desarrollador Responsable:** Vektor Digital

Este servicio no cuenta con un Delegado de Protección de Datos (DPD) formalmente designado para esta versión. Si fuere necesario, Vektor Digital podrá ser contactado directamente en el correo electrónico indicado.
