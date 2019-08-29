import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ct_Ex26 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){
            System.out.println("Count Down");
            String number;
            int i = 20;
            do{
                System.out.println("Press Enter");
                number = br.readLine();
                if(i==0){
                    System.out.println(String.format("BOOM!"));
                } else {
                    System.out.println(String.format("%s",i));
                }
                i--;
            }while (i>=0);
        } catch(Exception e){
            e.printStackTrace();
        }

    }
}
