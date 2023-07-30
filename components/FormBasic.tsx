import { useState } from "react";
import { Stepper, Button, Group, Title, Select, NativeSelect } from '@mantine/core';
import { useViewportSize, useOs } from '@mantine/hooks';
import { UseFormReturnType, useForm } from '@mantine/form';

export const FormBasic = () => {
  const os = useOs();

  const form = useForm({
    initialValues: {
      event: '',
      location: '',
      venue: '',
      relationship: '',
      budget: ''
    },
  });
  const [amount, setAmount] = useState<undefined | number>(undefined);

  function handleSubmit(){
    fetch("/api/findValue", {
      method: "POST",
      body: JSON.stringify(form.values)
    })
    .then(res => res.json())
    .then(data => setAmount(data.amount))
    .catch(err => console.error(err))
  }

  return (
    <section className="m-auto flex flex-col items-center justify-center w-11/12 max-w-4xl gap-2 rounded-lg bg-slate-50 py-4 px-4 md:px-6 shadow-md sm:w-5/6">
      <Title className="pt-4 text-2xl md:text-3xl">Cat dau la eveniment?</Title>
      <form className="w-full flex flex-col gap-4">
        {(['ios', 'android'].includes(os)) ?
          <NativeSelect
            {...form.getInputProps('event')}
            label="Ce fel de eveniment?"
            placeholder="Alege optiune"
            data={[
              { value: 'Nunta', label: 'Nunta' },
              { value: 'Botez', label: 'Botez' },
              { value: 'Cumetrie', label: 'Cumetrie' },
              { value: 'Majorat', label: 'Majorat' },
              { value: 'Aniversare', label: 'Aniversare' },
            ]}
          />

          :
          <Select
            {...form.getInputProps('event')}
            label="Ce fel de eveniment?"
            placeholder="Alege optiune"

            data={[
              { value: 'Nunta', label: 'Nunta' },
              { value: 'Botez', label: 'Botez' },
              { value: 'Cumetrie', label: 'Cumetrie' },
              { value: 'Majorat', label: 'Majorat' },
              { value: 'Aniversare', label: 'Aniversare' },
            ]}
          />

        }
        {(['ios', 'android'].includes(os)) ?
          <NativeSelect
            {...form.getInputProps('location')}
            label="Locatia evenimentului?"
            placeholder="Alege optiune"
            data={[
              { value: 'La Sat', label: 'La Sat' },
              { value: 'Orasel', label: 'Orasel' },
              { value: 'Oras Mare', label: 'Oras Mare' },
              { value: 'Majorat', label: 'Majorat' },
            ]}
          />

          :
          <Select
            {...form.getInputProps('location')}
            label="Ce fel de eveniment?"
            placeholder="Alege optiune"
            data={[
              { value: 'La Sat', label: 'La Sat' },
              { value: 'Orasel', label: 'Orasel' },
              { value: 'Oras Mare', label: 'Oras Mare' },
              { value: 'Majorat', label: 'Majorat' },
            ]}
          />

        }
        {(['ios', 'android'].includes(os)) ?
          <NativeSelect
            {...form.getInputProps('venue')}
            label="Tipul localului"
            placeholder="Alege optiune"

            data={[
              { value: 'Acasa', label: 'Acasa' },
              { value: 'Caminul Cultural', label: 'Caminul Cultural' },
              { value: 'Restaurant', label: 'Restaurant' },
              { value: 'Resort', label: 'Resort' },
            ]}
          />

          :
          <Select
            {...form.getInputProps('venue')}
            label="Tipul localului"
            placeholder="Alege optiune"

            data={[
              { value: 'Acasa', label: 'Acasa' },
              { value: 'Caminul Cultural', label: 'Caminul Cultural' },
              { value: 'Restaurant', label: 'Restaurant' },
              { value: 'Resort', label: 'Resort' },
            ]}
          />

        }

        {(['ios', 'android'].includes(os)) ?
          <NativeSelect
            {...form.getInputProps('relationship')}
            label="Cine este gazda?"
            placeholder="Alege optiune"

            data={[
              { value: 'Familie', label: 'Familie' },
              { value: 'Prieten apropiat', label: 'Prieten apropiat' },
              { value: 'Prieten distant', label: 'Prieten distant' },
              { value: 'Coleg', label: 'Coleg' },
              { value: 'Ruda distanta', label: 'Ruda distanta' },
            ]}
          />

          :
          <Select
            {...form.getInputProps('relationship')}
            label="Cine este gazda?"
            placeholder="Alege optiune"

            data={[
              { value: 'Familie', label: 'Familie' },
              { value: 'Prieten apropiat', label: 'Prieten apropiat' },
              { value: 'Prieten distant', label: 'Prieten distant' },
              { value: 'Coleg', label: 'Coleg' },
              { value: 'Ruda distanta', label: 'Ruda distanta' },
            ]}
          />

        }

        {(['ios', 'android'].includes(os)) ?
          <NativeSelect
            {...form.getInputProps('budget')}
            label="Ce buget am?"
            placeholder="Alege optiune"

            data={[
              { value: '0', label: '< 2000 RON' },
              { value: '1', label: '2000 - 4500 RON' },
              { value: '2', label: '4500 - 7000 RON' },
              { value: '3', label: '> 7000 RON' },
              { value: '4', label: 'Irelevant' },
            ]}
          />

          :
          <Select
            {...form.getInputProps('budget')}
            label="Ce buget am?"
            placeholder="Alege optiune"

            data={[
              { value: '0', label: '< 2000 RON' },
              { value: '1', label: '2000 - 4500 RON' },
              { value: '2', label: '4500 - 7000 RON' },
              { value: '3', label: '> 7000 RON' },
              { value: '4', label: 'Irelevant' },
            ]}
          />

        }

        {amount && 
        <div className="py-8 w-full flex justify-center" >
        <Title>{amount} RON</Title>
        </div>}

        <Group grow className="w-full">
          <Button variant="outline" onClick={handleSubmit}>Cat dau? </Button>
        </Group>
      </form>
    </section>
  );
}