<?php

namespace FontBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use BackBundle\Repository\EventTypeRepository;
use BackBundle\Entity\EventType;
use BackBundle\Entity\Event;
use Psr\Log\LoggerInterface;
use FontBundle\Service\MessageGenerator;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
class DefaultController extends Controller {

    public function indexAction() {


        $logger = $this->container->get('logger');
        $logger->info('Look! I just used a service');
        $messageGenerator = $this->get(MessageGenerator::class);

        $message = $messageGenerator->getHappyMessage();
        $this->addFlash('success', $message);
//        $container->get('knp_snappy.image')->generate('http://www.google.fr', '/path/to/the/image.jpg');
        return $this->render('FontBundle:Default:index.html.twig', [
                    'logger' => $logger->info('Look! I just used a service'),
                    'message' => $message
        ]);
    }

//    public function pdfAction() {
//        $messageGenerator = $this->get(MessageGenerator::class);
//         $message = $messageGenerator->getHappyMessage();
//        $html = $this->renderView('FontBundle:Default:pdf.html.twig', array(
//            'some' => $message
//        ));
//
//        return new PdfResponse(
//                $this->get('knp_snappy.pdf')->getOutputFromHtml($html), 'file.pdf'
//        );
//    }

    public function menuAction() {

//        $eventtypes = $this->getDoctrine()
//                ->getRepository(EventType::class)
//                ->findAll();

        $em = $this->getDoctrine()->getManager();
        $tickets = $em->getRepository('BackBundle:Tickets')->findAll();

        $categories = $em->getRepository('BackBundle:Category')->findAll();

//        $i=0;$j=1;
//        foreach ($cats as $cat) {
////            dump($cat);
//            $category[$i]=$cat->getName();
//            
//            
//            foreach ($cat->getTickets() as $t) {
//
////                
//                $categ[$cat->getname()][]=$cat->getId();
////                 dump( $categ);                 exit();
//               $categ[$cat->getname()][$j]=$t;
//                $j=$j+1;  
//            }
//            $j=1;
//            $i=$i+1;
//        }
//         dump($category);exit();
//                    dump( $categ);                 exit();
        return $this->render(
                        'FontBundle:Template:navbar.html.twig', array('tickets' => $tickets,
                    'categories' => $categories
                        )
        );
    }

}
