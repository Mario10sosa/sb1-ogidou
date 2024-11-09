import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Calendar, Users, TrendingUp } from 'lucide-react';

const DentistDashboard = () => {
  return (
    <DashboardLayout userType="dentist">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Panel del Odontólogo</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={<Calendar className="h-8 w-8 text-blue-600" />}
            title="Citas Hoy"
            value="8"
          />
          <StatCard
            icon={<Users className="h-8 w-8 text-green-600" />}
            title="Pacientes Totales"
            value="145"
          />
          <StatCard
            icon={<TrendingUp className="h-8 w-8 text-purple-600" />}
            title="Tratamientos Activos"
            value="12"
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Próximas Citas</h2>
          <div className="space-y-4">
            {/* Placeholder for appointments list */}
            <p className="text-gray-600">No hay citas programadas para hoy</p>
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

export default DentistDashboard;