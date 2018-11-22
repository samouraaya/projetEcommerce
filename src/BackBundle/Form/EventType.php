<?php

namespace BackBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use BackBundle\Form\EventTypeType;
use Doctrine\ORM\EntityRepository;
class EventType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('name')
                ->add('description')
                ->add('eventtype', EntityType::class, array(
                    'class' => 'BackBundle:EventType',
                    'query_builder' => function ( EntityRepository $er) {
                        return $er->createQueryBuilder('u')
                            ->orderBy('u.name', 'ASC');
                      },
                 'choice_label' => 'name'))
  
                ->add('country', \Symfony\Component\Form\Extension\Core\Type\CountryType::class,[
                    'mapped'=>false])
                 ->add('timezoneType', \Symfony\Component\Form\Extension\Core\Type\TimezoneType::class,[
                    'mapped'=>false])
                 ->add('adresse', \Symfony\Component\Form\Extension\Core\Type\TextareaType::class,[
                     
                'label'=>'adresse wiem',
                'mapped'=>false,  
                 'attr'=>[
                     'class'=>'wiem'
                     
                 ]
                     
                     ])
                ->add('type', \Symfony\Component\Form\Extension\Core\Type\FormType::class,[
                    'mapped'=>false
                ])
                              ;

               
    }/**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'BackBundle\Entity\Event'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'backbundle_event';
    }


}
