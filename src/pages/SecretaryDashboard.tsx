import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Calendar, Users, Phone } from 'lucide-react';

const SecretaryDashboard = () => {
  return (
    <DashboardLayout userType="secretary">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Panel de Secretaría</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={<Calendar className="h-8 w-8 text-blue-600" />}
            title="Citas Hoy"
            value="12"
          />
          <StatCard
            icon={<Users className="h-8 w-8 text-green-600" />}
            title="Pacientes Nuevos"
            value="3"
          />
          <StatCard
            icon={<Phone className="h-8 w-8 text-purple-600" />}
            title="Llamadas Pendientes"
            value="5"
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Agenda del Día</h2>
          <div className="space-y-4">
            {/* Placeholder for today's schedule */}
            <p className="text-gray-600">No hay eventos programados para hoy</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const StatCard = ({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{value}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  </div>
);

export default SecretaryDashboard;