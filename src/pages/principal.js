import Head from 'next/head';
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function Home() {
  return (
    <>
      <Head>
        <title>MAXPULV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-500 flex h-12 justify-between items-center px-12">
        <p className="text-2xl">MAXPULV</p>
      </div>
      <div className="flex bg-white">
        <div className="bg-gray-400 h-screen py-8">
          <ul>
            <li className="py-2 px-12 text-xl hover:bg-gray-600 cursor-pointer">Dashboard</li>
            <li className="py-2 px-12 text-xl hover:bg-gray-600 cursor-pointer">Calendário</li>
            <li className="py-2 px-12 text-xl hover:bg-gray-600 cursor-pointer">Histórico</li>
            <li className="py-2 px-12 text-xl hover:bg-gray-600 cursor-pointer">Relatórios</li>
          </ul>
        </div>
        <div className="flex flex-col w-full px-8">
          <div className="w-full pt-2">
            <h1 className="text-4xl">Fazenda Paiaguás</h1>
          </div>
          <div className="flex pt-4 justify-between w-full">
            <div className="w-2/5 flex flex-col mx-auto h-full">
              <FormControl>
                <InputLabel id="demo-simple-select-label">Selecione o Talhão</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value={10}>Talhão 10</MenuItem>
                  <MenuItem value={20}>Talhão 20</MenuItem>
                  <MenuItem value={30}>Talhão 30</MenuItem>
                </Select>
              </FormControl>
              <img src="/imgs/talhão.svg" alt="talhão" className="mt-4" />
            </div>
            <div className="w-3/5 flex flex-col mx-auto pl-6">
              <div className="flex justify-between items-center pb-4">
                <p className="opacity-75">Não contém ordem de serviço de aplicação de defensivos em andamento.</p>
                <button type="button" className="px-4 py-2 rounded-lg border border-gray-400 uppercase hover:bg-gray-400">Iniciar Aplicação</button>
              </div>
              <img src="/imgs/medidores.svg" alt="medidores" />
              <img src="/imgs/clima.svg" alt="clima" className="px-32 py-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
