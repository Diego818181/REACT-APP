import DefaultLayout from "@/layouts/default";
import { title, subtitle } from "@/components/primitives";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const TecnologiasPage = () => {
  return (
    <DefaultLayout>
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
      <h1 className={title()}>Tecnolog&iacute;as de Aprendizaje</h1>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h2 className={subtitle()}>Capacidades</h2>
        <br/>
          <h3>Implementaci&oacute;n de M-Learning</h3>
          <h3>Integraci&oacute;n de Herramientas de Colaboraci&oacute;n</h3>
          <h3>Desarrollo de Contenido Interactivo</h3>
          <h3>Evaluaci&oacute;n Continua del Desempe&ntilde;o</h3>
      </div>
      </div>
      </section>
      <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn><h2 className={subtitle()}>Capacidades</h2></TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Implementaci&oacute;n de M-Learning</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Integraci&oacute;n de Herramientas de Colaboraci&oacute;n</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Desarrollo de Contenido Interactivo</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Evaluaci&oacute;n Continua del Desempe&ntilde;o</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </DefaultLayout>
  );
};

export default TecnologiasPage;