 <img src="https://github.com/user-attachments/assets/59a2cf58-bc15-41e3-8b36-97ec278fc455" /> <br/>  


 <br/>  
  
  <h1 align="center ">
     <a href="#" target="_blank">Beauty Clinic Management System</a>
</h1> <br/>
  <p align="center">
    A comprehensive beauty clinic management system designed to streamline patient registration, appointment scheduling, and medical records management using
    <b>Next.js 14</b>, <b>Spline 3D</b>, and <b>Framer Motion</b>. 
  </p>
</div>



## 📦 Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Quick Start](#quick-start)   
4. [Architecture](#architecture)   
5. [Strengths & Improvement Areas](#strengths--improvement-areas)   
6. [Component Highlights](#component-highlights)   
7. [Core Technologies](#core-technologies)   
8. [Acknowledgments](#acknowledgments)  
9. [License](#license)
10. [Screenmshots](#screenshots)

---
## 1. 🚀 Features <a id="features"></a>

- **Patient Management**: Comprehensive patient registration and profile management
- **Appointment Scheduling**: Intuitive booking system with calendar integration
- **Medical Records**: Secure document upload and management system
- **Admin Dashboard**: Complete administrative control panel for clinic management
- **3D Interactive UI**: Engaging Spline-powered 3D elements for modern aesthetics
- **Real-time Notifications**: SMS integration via Twilio for appointment reminders
- **Responsive Design**: Mobile-first approach with elegant dark theme
- **Error Monitoring**: Integrated Sentry for production error tracking

---
<br />

## 2. ⚒️ Tech Stack <a id="tech-stack"></a>

| Category         | Technologies                                                                 |
|------------------|------------------------------------------------------------------------------|
| **Core**         | Next.js 14, React 18, TypeScript                                |
| **Styling**      | Tailwind CSS, Framer Motion, Radix UI                                    |
| **3D Graphics**  | Spline Tool, @splinetool/react-spline                             |
| **Backend**      | Appwrite, Node.js                                     |
| **Communication**| Twilio SMS, React Hook Form                                       |
| **UI Components**| Radix UI, Lucide React Icons, Class Variance Authority                     |
| **Data Management**| TanStack Table, React Datepicker, Zod validation                        |
| **Monitoring**   | Sentry                                  |
| **Testing**      | Jest, Playwright, React Testing Library                                     |
| **Infrastructure**| Vercel hosting, ESLint, Prettier                                        |

---
<br />

## 3. 🤸 Quick Start (Local Development)<a id="quick-start"></a>

###  Prerequisites

Make sure you have the following installed:

| Tool | Tested Version | Notes |
|------|----------------|-------|
| **Node.js** | ≥ 18.x | <https://nodejs.org/> |
| **Npm**  | any | <https://docs.npmjs.com/> |
| **Git** | any | <https://git-scm.com/> |

> Using **npm** is recommended, but yarn or pnpm will work too.

###  Clone the Repo

```bash
git clone https://github.com/your-username/auraaesthetics.git
cd auraaesthetics
```

### Install Dependencies

```bash
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory and add your environment variables:

```bash
# Appwrite Configuration
NEXT_PUBLIC_ENDPOINT=your_appwrite_endpoint
PROJECT_ID=your_project_id
API_KEY=your_api_key
DATABASE_ID=your_database_id
PATIENT_COLLECTION_ID=your_patient_collection_id
APPOINTMENT_COLLECTION_ID=your_appointment_collection_id
NEXT_PUBLIC_BUCKET_ID=your_bucket_id

# Twilio Configuration
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token

# Sentry Configuration
SENTRY_DSN=your_sentry_dsn
```

### Run the Dev Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser – the app will hot-reload on changes.

<br />

## 4. 🔍 Core Technologies<a id="core-technologies"></a>

**Frontend Framework & Runtime**

- Next.js 14 with App Router, React 18, TypeScript

**Styling & UI**

- Tailwind CSS for styling, Framer Motion for animations, Radix UI for accessible components

**3D & Graphics**

- Spline Tool for 3D scene creation, React Spline integration for interactive elements

**Backend & Database**

- Appwrite for backend services, database management, and file storage

**Communication & Notifications**

- Twilio for SMS notifications, React Hook Form for form management

**Monitoring & Error Tracking**

- Sentry for error monitoring, custom error boundaries for graceful error handling

<br />
<br />  
## 5.  🧱 Architecture<a id="architecture"></a>

**Component-Based Architecture:** Modular, reusable UI components with strict TypeScript typing

**Advanced Animation System:** Framer Motion integration with Spline 3D elements

**Responsive & Accessible Design:** Mobile-first Tailwind CSS with Radix UI accessibility standards

**Secure Data Management:** Appwrite backend with proper authentication and authorization

**Modern Development Workflow:** ESLint, Prettier, and comprehensive testing suite

<br />
<br />
## 6. 🎯 Strengths & Improvement Areas<a id="strengths--improvement-areas"></a>

**✅ Strengths**

- Modern tech stack with Next.js 14 and TypeScript
- Comprehensive healthcare management features
- Rich 3D interactive user interface
- Robust error monitoring and testing infrastructure
- Mobile-responsive design with dark theme
- Secure backend integration with Appwrite

**⚒️ Potential Improvements**

- Implement advanced state management (Zustand/Redux)
- Add comprehensive unit and integration tests
- Enhance SEO optimization
- Implement PWA capabilities
- Add more comprehensive documentation
- Optimize bundle size and performance metrics

<br />
<br />
## 7. 🧩 Component Highlights<a id="component-highlights"></a>

**Hero Section**

- Interactive 3D Spline background with Galaxy theme
- Responsive design with smooth animations
- Call-to-action elements for patient engagement

**Patient Registration**

- Multi-step form with validation using React Hook Form and Zod
- File upload capabilities for medical documents
- Phone number validation and formatting

**Appointment Management**

- Calendar-based scheduling system
- Real-time availability checking
- SMS confirmation via Twilio integration

**Admin Dashboard**

- Comprehensive patient and appointment management
- Statistical overview with StatCard components
- Data table with sorting and filtering capabilities

**UI Components**

- Custom form fields with consistent styling
- Status badges for appointment states
- Modal dialogs for various interactions
- Reusable submit buttons with loading states

**Built with care for healthcare professionals and patients. ✨**
<br />
<br />
## 8. 🙏Acknowledgments <a id="acknowledgments"></a>

Built with inspiration from:

- Adrian Hajdin's JavaScript Mastery community [JavaScript Mastery](https://www.youtube.com/c/JavaScriptMastery)
- The Next.js community for endless resources and best practices
- Radix UI team for accessible component primitives
- Appwrite community for backend-as-a-service solutions
- Open-source contributors who share their knowledge freely
<br />
<br />

## 9.  📜License <a id="license"></a>
MIT License - see LICENSE.md for details.
<br />
<br />

![image](https://github.com/user-attachments/assets/9d8fb39d-f412-4a08-9621-06e55b9d2eff)
![image](https://github.com/user-attachments/assets/8a934eae-ab19-4250-94de-214362cf657d)
![image](https://github.com/user-attachments/assets/614b3a40-8340-4f6d-af3b-6957823ab71f)
![image](https://github.com/user-attachments/assets/5ae92d28-1583-40c2-b2e0-63cf7873f94f)
![image](https://github.com/user-attachments/assets/0577f8ba-d2ab-4733-ae89-2c0f43cf3425)


