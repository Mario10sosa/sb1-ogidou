import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  FileText, 
  Settings, 
  LogOut 
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'dentist' | 'patient' | 'secretary';
}

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const menuItems = {
    dentist: [
      { icon: <Calendar />, text: 'Citas', path: '/dentist/appointments' },
      { icon: <Users />, text: 'Pacientes', path: '/dentist/patients' },
      { icon: <FileText />, text: 'Historias Clínicas', path: '/dentist/records' },
    ],
    patient: [
      { icon: <Calendar />, text: 'Mis Citas', path: '/patient/appointments' },
      { icon: <FileText />, text: 'Mi Historia', path: '/patient/history' },
      { icon: <Settings />, text: 'Mi Perfil', path: '/patient/profile' },
    ],
    secretary: [
      { icon: <Calendar />, text: 'Gestión de Citas', path: '/secretary/appointments' },
      { icon: <Users />, text: 'Pacientes', path: '/secretary/patients' },
      { icon: <FileText />, text: 'Registros', path: '/secretary/records' },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Panel de Control</h2>
        </div>
        <nav className="mt-4">
          {menuItems[userType].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
            >
              <span className="mr-3">{item.icon}</span>
              {item.text}
            </Link>
          ))}
          <Link
            to="/login"
            className="flex items-center px-4 py-3 text-red-600 hover:bg-red-50 mt-4"
          >
            <LogOut className="mr-3" />
            Cerrar Sesión
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;