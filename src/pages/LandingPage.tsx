import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Calendar, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">DentalCare</span>
            </div>
            <div className="flex items-center">
              <Link
                to="/login"
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Sistema de Gestión</span>
            <span className="block text-blue-600">Dental Integral</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Gestione su clínica dental de manera eficiente con nuestro sistema integral
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-blue-600" />}
              title="Gestión de Citas"
              description="Administre fácilmente las citas de sus pacientes"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-blue-600" />}
              title="Historias Clínicas"
              description="Mantenga un registro detallado de sus pacientes"
            />
            <FeatureCard
              icon={<Stethoscope className="h-8 w-8 text-blue-600" />}
              title="Seguimiento de Tratamientos"
              description="Control y seguimiento de tratamientos dentales"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex justify-center">{icon}</div>
    <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{title}</h3>
    <p className="mt-2 text-base text-gray-500 text-center">{description}</p>
  </div>
);

export default LandingPage;