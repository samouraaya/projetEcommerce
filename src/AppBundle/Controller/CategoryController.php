<?php

namespace AppBundle\Controller;

use BackBundle\Entity\Category;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Category controller.
 *
 */
class CategoryController extends Controller {

    /**
     * Lists all category entities.
     *
     */
    public function indexAction() {
        $em = $this->getDoctrine()->getManager();

        $category = $em->getRepository('BackBundle:Category')->findAll();

        return $this->render('AppBundle:category:index.html.twig', array(
                    'categories' => $category,
        ));
    }

    /**
     * Creates a new category entity.
     *
     */
    public function newAction(Request $request) {
        $category = new Category();
        $form = $this->createForm('BackBundle\Form\CategoryType', $category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($category);
            $em->flush();

            return $this->redirectToRoute('category_show', array('id' => $category->getId()));
        }

        return $this->render('AppBundle:category:new.html.twig', array(
                    'category' => $category,
                    'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a category entity.
     *
     */
    public function showAction(Category $category) {
        $deleteForm = $this->createDeleteForm($category);

        return $this->render('AppBundle:category:show.html.twig', array(
                    'category' => $category,
                    'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing category entity.
     *
     */
    public function editAction(Request $request, Category $category) {
        $deleteForm = $this->createDeleteForm($category);
        $editForm = $this->createForm('BackBundle\Form\CategoryType', $category);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('category_edit', array('id' => $category->getId()));
        }

        return $this->render('AppBundle:category:edit.html.twig', array(
                    'category' => $category,
                    'edit_form' => $editForm->createView(),
                    'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a category entity.
     *
     */
    public function deleteAction(Request $request, Category $category) {
        $form = $this->createDeleteForm($category);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($category);
            $em->flush();
        }

        return $this->redirectToRoute('category_index');
    }

    /**
     * Creates a form to delete a category entity.
     *
     * @param Category $category The category entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Category $category) {
        return $this->createFormBuilder()
                        ->setAction($this->generateUrl('category_delete', array('id' => $category->getId())))
                        ->setMethod('DELETE')
                        ->getForm()
        ;
    }
    
     /**
     * Lists all Tickets lié au Category entities.
     *
     */
    public function showTicketCategoryAction($categoryId) {
        $em = $this->getDoctrine()->getManager();

        $category = $em->getRepository('BackBundle:Category')->find($categoryId);
        $ticket = $category->getTickets();
//        dump($ticket);        exit();
//        $i=0;
//        foreach ($ticket as $tick){
//            $tickets[$i]['id']=$tick->getId();
//            $tickets[$i]['name']=$tick->getName();
////          $ticke[$i]['name']= $tick->getName();
//          $i=$i+1;
////            foreach ($cat->getProduit() as $p){
////               dump($p);
////            }
//        }
//        dump( $ticket);
//      exit();
//        $results = array('tickets'      => $ticke,
//                  'category' => $category->getId());
//        return new Response(json_encode($tickets));
//        $result=new JsonResponse(['html'=>$this->renderView('AppBundle:category:showTickets.html.twig',['tickets'=>$tickets])]);
//       dump( $result);exit();
//        return $result;
        return $this->render('AppBundle:category:index.html.twig', array(
                    'tickets' => $ticket,
                    'categories' => $category
        ));
    }
    
   

}
