# MediVault - Decentralized Healthcare Platform

![MediVault Logo](public/logo.png)

MediVault is a revolutionary decentralized healthcare platform that leverages blockchain technology to provide secure, patient-controlled medical record management. Built on Filecoin Virtual Machine (FVM) and decentralized storage, MediVault ensures data integrity, security, and patient ownership of medical information.

## 🌟 Features

### Core Features (MVP)

- 🔒 **Decentralized Medical Records Storage**

  - Secure storage on Filecoin network
  - Patient-controlled access permissions
  - Immutable record of data access/changes
- 🔐 **User Authentication & Security**

  - Blockchain-based identity verification
  - Multi-factor authentication
  - Private key management with recovery options
- 📝 **Medical Record Management**

  - Manual entry of medical information
  - Document upload (prescriptions, lab reports, imaging)
  - Basic categorization and search functionality
- 🏥 **Provider Directory & Appointment Booking**

  - Search for healthcare providers
  - Schedule appointments
  - Appointment reminders
- 💊 **Medication Management**

  - Medication list and schedule
  - Reminder notifications
  - Basic medication information
- 👨‍👩‍👧‍👦 **Family Account Linking**

  - Connect family member accounts
  - Manage dependents' health information
- 🚨 **Emergency Medical Profile**

  - Critical information accessible via QR code
  - No authentication required for emergency access

### Future Features

- 🤖 AI-Powered Health Insights
- ⌚ Health Wearable Integration
- 🎥 Telehealth Functionality
- 💊 Virtual Pharmacy Integration
- 🔍 Symptom Checker & Triage Assistant
- 👥 Care Team Collaboration Tools
- 🎯 Health Goals & Progress Tracking
- 📊 Predictive Analytics for Hospitals
- 🌐 Multilingual Support
- 📱 Offline Access with Cloud Sync

## 🎯 Target Audience

- **Patients/Consumers**: Individuals seeking control over their healthcare information
- **Healthcare Providers**: Doctors, hospitals, clinics seeking efficient access to patient records
- **Pharmacies**: For medication management and prescription fulfillment
- **Insurance Companies**: For streamlined claims processing (future integration)
- **Emergency Medical Services**: For quick access to critical patient information

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Ayomisco/medivault.git
cd medivault
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:

```env
VITE_WALLET_CONNECT_PROJECT_ID=your_project_id
VITE_FILE_COIN_API_KEY=your_api_key
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Blockchain**: Filecoin Virtual Machine (FVM)
- **Authentication**: Web3Modal, WalletConnect
- **Storage**: IPFS, Filecoin
- **State Management**: React Query, Zustand
- **Form Handling**: React Hook Form, Zod
- **UI Components**: Shadcn/ui

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions or support, please reach out to:

- Email: fayomide324@gmail.com

## 🙏 Acknowledgments

- Filecoin Foundation
- Web3Modal Team
- All contributors and supporters

---

Made with ❤️ by the MediVault Team
