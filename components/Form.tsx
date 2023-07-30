import { useState } from "react";
import { Stepper, Button, Group, Title, Select, NativeSelect } from '@mantine/core';
import { useViewportSize, useOs } from '@mantine/hooks';
import { UseFormReturnType, useForm } from '@mantine/form';

export const Form = () => {
  const os = useOs();
  const { width } = useViewportSize();
  const isMobile = width < 500;

  const steps = [
    { title: "Eveniment", subtitle: "Ce fel de eveniment?" },
    { title: "Locatia", subtitle: "Unde se intampla?" },
    { title: "Cine", subtitle: "Ce relatie am cu gazda?" },
    { title: "Buget", subtitle: "Ce salariu am?" }

  ]

  const form = useForm({
    initialValues: {
      event: '',
      location: '',
      venue: '',
      relationship: '',
      budget: ''
    },
  });


  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const MobileTitle = () => {
    if (isMobile) {
      return (
        <>
          <Title className="text-2xl" h={4}>{steps[active].title}</Title>
          <Title className="text-lg" h={5}>{steps[active].subtitle}</Title>
        </>
      )
    }
  }

  return (
    <section className="m-auto flex flex-col items-center justify-center w-11/12 gap-2 rounded-lg bg-slate-50 py-4 px-4 md:px-6 shadow-md sm:w-5/6">
      <Title className="pt-4 text-2xl md:text-3xl">Cat dau la eveniment?</Title>
      <form className="w-full">
        <Stepper
          className="flex flex-col gap-4 py-10"
          size={isMobile ? 'xs' : 'md'}
          active={active}
          iconSize={34}
          onStepClick={setActive}>
          <Stepper.Step
            label={isMobile ? "" : steps[0].title}
            description={isMobile ? "" : steps[0].subtitle}
          >
            <div className="flex flex-col gap-8">
              <MobileTitle />
              {(['ios', 'android'].includes(os)) ?
                <NativeSelect
                  {...form.getInputProps('event')}
                  label="Ce fel de eveniment?"
                  placeholder="Pick one"
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
                  placeholder="Pick one"
                  data={[
                    { value: 'Nunta', label: 'Nunta' },
                    { value: 'Botez', label: 'Botez' },
                    { value: 'Cumetrie', label: 'Cumetrie' },
                    { value: 'Majorat', label: 'Majorat' },
                    { value: 'Aniversare', label: 'Aniversare' },
                  ]}
                />

              }

            </div>
          </Stepper.Step>
          <Stepper.Step
            label={isMobile ? "" : steps[1].title}
            description={isMobile ? "" : steps[1].subtitle}
          >
            <div className="flex flex-col gap-8">
              <MobileTitle />
              {(['ios', 'android'].includes(os)) ?
                <NativeSelect
                  {...form.getInputProps('location')}
                  label="Ce fel de eveniment?"
                  placeholder="Pick one"
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
                  placeholder="Pick one"
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
                  placeholder="Pick one"
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
                  placeholder="Pick one"
                  data={[
                    { value: 'Acasa', label: 'Acasa' },
                    { value: 'Caminul Cultural', label: 'Caminul Cultural' },
                    { value: 'Restaurant', label: 'Restaurant' },
                    { value: 'Resort', label: 'Resort' },
                  ]}
                />

              }
            </div>
          </Stepper.Step>
          <Stepper.Step
            label={isMobile ? "" : steps[2].title}
            description={isMobile ? "" : steps[2].subtitle}
          >
            <div className="flex flex-col gap-8">
              <MobileTitle />
              {(['ios', 'android'].includes(os)) ?
                <NativeSelect
                  {...form.getInputProps('relationship')}
                  label="Cine este gazda?"
                  placeholder="Pick one"
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
                  placeholder="Pick one"
                  data={[
                    { value: 'Familie', label: 'Familie' },
                    { value: 'Prieten apropiat', label: 'Prieten apropiat' },
                    { value: 'Prieten distant', label: 'Prieten distant' },
                    { value: 'Coleg', label: 'Coleg' },
                    { value: 'Ruda distanta', label: 'Ruda distanta' },
                  ]}
                />

              }
            </div>
          </Stepper.Step>
          <Stepper.Step
            label={isMobile ? "" : steps[3].title}
            description={isMobile ? "" : steps[3].subtitle}
          >
            <div className="flex flex-col gap-8">
              <MobileTitle />
              {(['ios', 'android'].includes(os)) ?
                <NativeSelect
                  {...form.getInputProps('budget')}
                  label="Ce buget am?"
                  placeholder="Pick one"
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
                  placeholder="Pick one"
                  data={[
                    { value: '0', label: '< 2000 RON' },
                    { value: '1', label: '2000 - 4500 RON' },
                    { value: '2', label: '4500 - 7000 RON' },
                    { value: '3', label: '> 7000 RON' },
                    { value: '4', label: 'Irelevant' },
                  ]}
                />

              }
            </div>
          </Stepper.Step>
          <Stepper.Completed>
            <pre>
              {JSON.stringify(form.values, null, 2)}
            </pre>
          </Stepper.Completed>
        </Stepper>

        <Group grow className="w-full">
          <Button variant="default" onClick={prevStep}>Inapoi</Button>
          {active !== 4 && <Button variant="outline" onClick={nextStep}>{active === 3 ? "Cat dau?" : "Urmatorul pas"}</Button>}
        </Group>
      </form>
    </section>
  );
}