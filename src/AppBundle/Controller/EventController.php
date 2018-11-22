<?php

namespace AppBundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use BackBundle\Entity\Event;

/**
 * Event controller.
 *
 */
class EventController extends Controller
{
    /**lister les Events**/
    public function indexAction() {
        
        $em=$this->getDoctrine()->getManager();
        $events=$em->getRepository("BackBundle:Event")->findAll();
        
        return $this->render('AppBundle:Event:index.html.twig',array('events'=>$events,
            ));
        
    }
    
       /**
     * Creates a new event entity.
     *
     */
    public function newAction(Request $request)
    {
        $event = new Event();
        $form = $this->createForm('BackBundle\Form\EventType', $event);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($event);
            $em->flush();

            return $this->redirectToRoute('event_index');
        }

        return $this->render('AppBundle:Event:new.html.twig', array(
            'events' => $event,
            'form' => $form->createView(),
        ));
    }
    
//    public function newAction(Request $request)
//    {
//       $event=new Event(); 
//        $eventtype = new EventType();
////        $eventtype->addEvent($event);
////        $event->setEventtype($eventtype);
//     
//        $form = $this->createForm('BackBundle\Form\EventType', $event);
//       $form->handleRequest($request);
//       if($form->isSubmitted() && $form->isValid())
//       {
//           $em=$this->getDoctrine()->getManager();
////            if(!$event->getParentId()){
////                $event->setParentId(0);
////            }else{
////            // get parent id value from input choice
////            $parent = $event->getParentId();
////            $parentEvent = $parent->getEvent();
////            // end
////                $event->setParentId($parentEvent->getId());
////            }
////           
//           $em->persist($event);
////           $em->persist($eventtype);
//           $em->flush();
//           
//           $this->redirectToRoute('event_index');
//           
//       }
//        $this->render('BackBundle:Event:new.html.twig',
//                array('event'=>$event,
//                       'form'=> $form->createView(),
//                    ));
//    }
//    
  
}
