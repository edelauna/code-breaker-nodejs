import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class ct_Ex35 {

    public static void main(String[] args) {
        // sum of two numbers
        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))){
            int[][] m1 = {{1,2}, {3,4}};
            int sum = 0;
            for(int i = 0; i<m1.length; i++){
                for(int j =0; j <m1[i].length; j++){
                    sum += m1[j][i];
                }
            }

            System.out.println(String.format("%s", sum));

        } catch(Exception e){
            e.printStackTrace();
        }

    }

}
