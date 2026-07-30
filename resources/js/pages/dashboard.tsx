import { useState, FormEvent, ChangeEvent } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

export default function Dashboard() {
  // Estados para os arquivos e parâmetros
  const [txtFile, setTxtFile] = useState<File | null>(null);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  // Manipuladores para os inputs
  const handleTxtFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setTxtFile(e.target.files[0]);
    }
  };

  const handleCsvFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCsvFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Exibe os valores no console para verificação
    console.log('Arquivo TXT:', txtFile);
    console.log('Arquivo CSV:', csvFile);
    console.log('Nome:', nome);
    console.log('Email:', email);

    // Aqui você pode implementar a lógica para enviar os dados para o backend
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />

      <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="txtFile">Upload de Arquivo (.txt):</label>
            <input
              id="txtFile"
              type="file"
              accept=".txt"
              onChange={handleTxtFileChange}
              className="p-2 border rounded"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="csvFile">Upload de Arquivo (.csv):</label>
            <input
              id="csvFile"
              type="file"
              accept=".csv"
              onChange={handleCsvFileChange}
              className="p-2 border rounded"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Nome:</label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="p-2 border rounded"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded"
              placeholder="Digite seu email"
            />
          </div>

          <button type="submit" className="p-2 bg-blue-600 text-white rounded">
            Enviar
          </button>
        </form>

        <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
          <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
        </div>
      </div>
    </AppLayout>
  );
}
