<?php

namespace AppBundle\Controller;

use BackBundle\Entity\Tickets;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use FontBundle\Service\MessageGenerator;
/**
 * Tickets controller.
 *
 */
class TicketsController extends Controller {

    /**
     * Lists all tickets entities.
     *
     */
    public function indexAction() {

        if (!$this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
          /*  throw $this->createAccessDeniedException();*/
            return $this->redirectToRoute("back_homepage");
        }
        $em = $this->getDoctrine()->getManager();

        $tickets = $em->getRepository('BackBundle:Tickets')->findAll();
        $categories = $em->getRepository('BackBundle:Category')->findAll();
//        dump($categories);exit();
        return $this->render('AppBundle:tickets:index.html.twig', array(
                    'tickets' => $tickets,
                    'categories'=>$categories
        ));
    }

    /**
     * Creates a new tickets entity.
     *
     */
    public function newAction(Request $request) {
        $tickets = new Tickets();
        $form = $this->createForm('BackBundle\Form\TicketsType', $tickets);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($tickets);
            $em->flush();

            return $this->redirectToRoute('ticket_show', array('id' => $tickets->getId()));
        }

        return $this->render('AppBundle:tickets:new.html.twig', array(
                    'tickets' => $tickets,
                    'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a tickets entity.
     *
     */
    public function showAction(Tickets $tickets) {
        $deleteForm = $this->createDeleteForm($tickets);

        return $this->render('AppBundle:tickets:show.html.twig', array(
                    'tickets' => $tickets,
                    'delete_form' => $deleteForm->createView(),
        ));
    }
    public function pdfAction(Tickets $tickets) {
//        $messageGenerator = $this->get(MessageGenerator::class);
//         $message = $messageGenerator->getHappyMessage();
        $deleteForm = $this->createDeleteForm($tickets);
        $html = $this->renderView('AppBundle:tickets:pdf.html.twig', array(
                    'tickets' => $tickets
                   
        ));
//dump( $this->get('knp_snappy.pdf')->getOutputFromHtml($html));
//exit();
        return new PdfResponse(
                $this->get('knp_snappy.pdf')->getOutputFromHtml($html), 'file.pdf'
        );
    }
    /**
     * Displays a form to edit an existing tickets entity.
     *
     */
    public function editAction(Request $request, Tickets $tickets) {
        $deleteForm = $this->createDeleteForm($tickets);
        $editForm = $this->createForm('BackBundle\Form\TicketsType', $tickets);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('ticket_edit', array('id' => $tickets->getId()));
        }

        return $this->render('AppBundle:tickets:edit.html.twig', array(
                    'tickets' => $tickets,
                    'edit_form' => $editForm->createView(),
                    'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a tickets entity.
     *
     */
    public function deleteAction(Request $request, Tickets $tickets) {
        $form = $this->createDeleteForm($tickets);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($tickets);
            $em->flush();
        }

        return $this->redirectToRoute('ticket_index');
    }

    /**
     * Creates a form to delete a tickets entity.
     *
     * @param Tickets $tickets The tickets entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Tickets $tickets) {
        return $this->createFormBuilder()
                        ->setAction($this->generateUrl('ticket_delete', array('id' => $tickets->getId())))
                        ->setMethod('DELETE')
                        ->getForm()
        ;
    }

}
